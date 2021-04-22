import React, { useEffect } from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Tab } from "../components/Tab";
import api from "../services/api";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvironmentsProps {
  key: string;
  title: string;
}
interface PlantsProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: string;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const [environments, setEnvironments] = React.useState<EnvironmentsProps[]>([]);
  const [plants, setPlants] = React.useState<PlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = React.useState<PlantsProps[]>([]);
  const [environmentsSelected, setEnvironmentsSelected] = React.useState("all");

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
    async function getPlants() {
      const { data } = await api.get("plants?_sort=name&_order=asc");
      setPlants(data);
    }

    getPlants();
  }, []);

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
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
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
