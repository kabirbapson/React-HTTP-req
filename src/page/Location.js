import React from "react";

export default function Location() {
  const [location, setLocation] = React.useState();
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // setLocation(position);
        console.log("position");
        console.log(position);
      },
      (err) => {
        console.log(err);
      }
    );
  };
   
  React.useEffect(() => {
    //   document.exitFullscreen()

    console.log(
      navigator.geolocation.getCurrentPosition((position) =>
        console.log(position)
      )
    );
    //   .getCurrentPosition((position) => {
    //     setLocation(position);
    //   console.log("position");
    //   console.log(position);
    // },
    // { enableHighAccuracy: false, timeOut: 20000, maximumAge: 1000 }
  }, []);

  return (
    <div>
      <button onClick={getLocation}>Request Permission</button>
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
}
