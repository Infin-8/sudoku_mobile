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
  },
  contentContainer: {
    width: "100%",
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
    flex: 1, // Makes sure the container takes up the available space
    justifyContent: "center", // Vertically center children within the container
    alignItems: "center", // Horizontally center children within the container
    width: "100%", // Ensures it takes full width
    height: "100%", // Ensures it takes full height (if needed)
  },
  tester: {
    width: "100%", // Ensures it takes the full width of the parent
    height: "100%", // Ensures it takes the full height of the parent
    color: "black",
    fontSize: 150,
    display: "flex", // This ensures flexbox is used
    justifyContent: "center", // Centers text vertically
    alignItems: "center", // Centers text horizontally
    textAlign: 'center', // Ensures text is centered horizontally in the Text component itself,
  },
  boardListMain: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  boardContainerExtras: {
    width: "100%",
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 5
  }
});

export default styles;