import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 3,
    width: "100%",
  },
  startScreenContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: "100%",
    width: "100%",
  },
  startScreenBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '33%', 
    height: 170, 
    backgroundColor: [2, 3, 7].includes(i) ? '#c1f0d3' : '#80ffbf',
    color: 'white',
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
    fontSize: 130,
    textAlign: 'center',
  },
  spinner: {
    transform: [{ rotate: '12deg' }],
  },
});

export default styles;