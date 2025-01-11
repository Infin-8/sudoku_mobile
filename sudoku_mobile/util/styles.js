import { StyleSheet } from 'react-native';
import DifficultyButton from '../components/DIfficultyButton';

const styles = StyleSheet.create({
  quickFlex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gradient: {
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    paddingTop: 0,
  },
  mainContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    width: "100%",
    justifyContent: "flex-start",
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    marginBottom: "2%",
    padding: ".25%",
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  button: {
    paddingVertical: 24,
    borderRadius: 16,
    width: 325,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonWrapper: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  flatList: {
    justifyContent: 'space-between',

  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
  },
  logo: (i) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 132,
    height: 132,
    backgroundColor: [2, 3, 7].includes(i) ? '#c1f0d3' : '#80ffbf',
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 2 },
    textShadowRadius: 5,
    borderWidth: [2, 3, 7].includes(i) ? 1 : 2,
    borderStyle: [2, 3, 7].includes(i) ? 'inset' : 'outset',
    borderColor: 'mintcream',
    transform: i === 4 ? [{ rotate: '12deg' }] : [],
    fontFamily: 'Arial',
    overflow: 'hidden',
    zIndex: i === 4 ? 999 : 1,
  }),
  logoText: {
    color: 'white',
    fontSize: 100,
    textAlign: 'center',
  },
  spinner: {
    transform: [{ rotate: '12deg' }],
  },
  marginTop: '0',
  boardContainers: {
    backgroundColor: "whitesmoke",
    boxShadow: "1px 2px 4px black",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  tester: {
    width: "25%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
  },
  boardListMain: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "2%"
  },
  boardContainerExtras: {
    width: "100%",
    marginBottom: 15,
    borderWidth: 0,
    borderRadius: 5
  },
  playButton: {
    width: 75,
    height: 40,
    backgroundColor: "mintcream",
    justifyContent: "center",
    borderRadius: 6,
  },
  diffBtnText: {
    fontSize: 25,
    color: "white",
    textAlign: "center"
  },
  boardContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  board: (num, tools = false) => ({
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    width: 44,
    margin: 1,
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: tools
      ? "#99ffcc"
      : [
        3, 4, 5, 12, 13, 14, 21, 22, 23, 27, 28, 29, 35, 34, 33, 36, 37,
        38, 43, 42, 44, 45, 46, 47, 51, 52, 53, 57, 58, 59, 66, 67, 68,
        75, 76, 77,
      ].includes(num - 1)
        ? "#99ffcc"
        : "white",

  }),
  boardText: {
    fontSize: 125,
    textAlign: "center",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5
  },
  boardEffects: (tools = false) => ({
    boxShadow: "1px 2px 6px black",
    width: "96.5%",
    marginBottom: tools ? null : "10%"
  }),
  miniGridContainer: {
    height: 180,
    borderWidth: 1,
    borderTopStartRadius: 6,
    borderBottomLeftRadius: 6,
    width: "25%",
  }
});

export default styles;