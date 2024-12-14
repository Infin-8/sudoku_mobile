import styles from "../util/styles";
import { View, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStartButtons } from '../util/helpers';
import DifficultyButton from '../components/DIfficultyButton';
import Logo from '../components/Logo';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
const { mainContainer, gradient, flatList } = styles


const App = () => {


    return (
        <>
            <StatusBar backgroundColor="#000000" style="light" translucent={true} />
            <LinearGradient colors={['white', '#C1E3D5']} style={gradient}>
                <SafeAreaView style={mainContainer}>
                    <Logo />
                    <View style={{ justifyContent: "center", alignItems: "center", marginBottom: "3%" }}>
                        <FlatList
                            contentContainerStyle={flatList}
                            data={getStartButtons()}
                            renderItem={({ item: { value, color } }) => (
                                <DifficultyButton
                                    title={value}
                                    color={color}
                                />
                            )}
                            keyExtractor={({ value }) => value}
                        />
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </>
    );
};

export default App;