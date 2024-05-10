import Card from "react-bootstrap/Card";
import styles from "../App.module.css";
import SunnyIcon from "../assets/SunnyIcon.svg";
import HazeIcon from "../assets/Hazeicon.svg";
import SunCloudIcon from "../assets/SunCloudIcon.svg";
import OvercastCloudsIcon from "../assets/OvercastCloudsIcon.svg";

function SideCard({ weatherData }) {
  const getWeatherIcon = (description) => {
    switch (description) {
      case "clear sky":
        return SunnyIcon;
      case "haze":
        return HazeIcon;
      case "scattered clouds":
        return SunCloudIcon;
      case "overcast clouds":
        return OvercastCloudsIcon;
      default:
        return SunnyIcon;
    }
  };

  return (
    <Card className={styles.card}>
      <Card.Img
        className={styles.cardimg}
        variant="top"
        src={getWeatherIcon(weatherData?.weather[0]?.description)}
      />
      <Card.Body>
        {weatherData ? (
          <>
            <Card.Title className={styles.cardtitle}>
              {weatherData.main.temp.toFixed(1)}°C
            </Card.Title>
            <Card.Text className={styles.cardtext}>
              {weatherData.weather[0].description}
            </Card.Text>
          </>
        ) : (
          <Card.Text className={styles.cardtext}>No weather data</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default SideCard;
