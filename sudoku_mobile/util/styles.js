import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    // backgroundColor: "indigo"
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
    width: 125, 
    height: 130, 
    backgroundColor: [2, 3, 7].includes(i) ? '#c1f0d3' : '#80ffbf',
    // color: 'red',
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
  marginTop: '0'
});

export default styles;