import { tabs } from "@/constants/data";
import { Tabs } from "expo-router";
import { View } from "react-native";

const TabLayout = () => {
    const TabIcon = ({focused, icon}: TabIconProps) => {
        return(
            <View style={{width: 25, height: 25}}>
                {icon}
            </View>
        )
    }

    return(
        <Tabs screenOptions={{ headerShown: false }}>
            {tabs.map((tab) => (
                <Tabs.Screen 
                    key={tab.name} 
                    name ={tab.name} 
                    options={{
                        title: tab.title, 
                        tabBarIcon: ({focused}) => (

                        ) 
                    }} />
            )}
        </Tabs>
    )
}

export default TabLayout;