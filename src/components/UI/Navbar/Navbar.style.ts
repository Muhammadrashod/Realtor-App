import { StyleSheet } from "aphrodite/no-important";

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#333", // Set your desired background color
    color: "#fff", // Set your desired text color
  },
  searchContainer: {
    flex: 1,
    marginLeft: "20px", // Adjust the margin as needed
  },
  searchInput: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
  },
  themeToggle: {
    marginLeft: "20px", // Adjust the margin as needed
    cursor: "pointer",
  },
  themeToggleIcon: {
    width: "20px",
    height: "20px",
  },
});

export default styles;
