import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Header } from "../components/Header";
import { Load } from "../components/Load";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Tab } from "../components/Tab";
import { PlantProps } from "../libs/storage";
import api from "../services/api";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvironmentsProps {
  key: string;
  title: string;
}
export function PlantSelect() {
  const [environments, setEnvironments] = React.useState<EnvironmentsProps[]>(
    []
  );
  const [plants, setPlants] = React.useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = React.useState<PlantProps[]>([]);
  const [environmentsSelected, setEnvironmentsSelected] = React.useState("all");
  const [isLoading, setIsLoading] = React.useState(true);

  const [page, setPage] = React.useState(1);
  const [loadingMore, setLoadingMore] = React.useState(false);

  const navigation = useNavigation();

  function handleEnvironment(environments: string) {
    setEnvironmentsSelected(environments);

    if (environments == "all") {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter((plant) =>
      plant.environments.includes(environments)
    );

    setFilteredPlants(filtered);
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );

    if (!data) return setIsLoading(true);

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setIsLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  }

  function handlePlantSelected(plant: PlantProps) {
    navigation.navigate("PlantSave", { plant });
  }

  useEffect(() => {
    async function getEnvironments() {
      const { data } = await api.get(
        "plants_environments?_sort=title&_order=asc"
      );
      setEnvironments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }

    getEnvironments();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  if (isLoading) return <Load />;

  return (
    <SafeAreaView style={s.container}>
      <View style={s.wrapper}>
        <Header />
        <Text style={s.title}>Em qual ambiente</Text>
        <Text style={s.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <Tab
              title={item.title}
              active={item.key === environmentsSelected}
              onPress={() => handleEnvironment(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={s.tabList}
        />
      </View>
      <View style={s.plants}>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              onPress={() => handlePlantSelected(item)}
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => {
            handleFetchMore(distanceFromEnd);
          }}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    padding: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
  },
  tabList: {
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
});
