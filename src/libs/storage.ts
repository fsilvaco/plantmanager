import AsyncStorage from "@react-native-async-storage/async-storage"
import { format } from "date-fns"

export interface PlantProps {
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
    dateTimeNotification: Date;
}