import { StyleSheet } from "aphrodite";

interface LogoStyles {
  logoContainer: React.CSSProperties;
  logoImage: React.CSSProperties;
  logoText: React.CSSProperties;
  logoHover: React.CSSProperties;
}

const styles: LogoStyles = StyleSheet.create({
  logoContainer: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    margin: "10px",
    transition: "transform 0.3s ease",
  },
  logoImage: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
  logoText: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "36px",
    fontWeight: "bold",
    color: "black",
  },
  logoHover: {
    ":hover, :focus-visible": {
      outline: 0,
      transform: "scale(1.1)",
      color: "blueviolet",
      filter: "drop-shadow(0 0 5px blueviolet)",
    },
  },
});

export default styles;
