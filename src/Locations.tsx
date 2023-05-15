import { Location, useQuery } from "./gqty";

const Locations: React.FC<{
  onClick?: (p: Location) => void;
}> = ({ onClick }) => {
  const { locations } = useQuery();

  console.log("cars render");

  return (
    <>
      {locations()?.results?.map((location) => (
        <a
          href={onClick ? "javascript:void(0)" : undefined}
          key={location?.id ?? "0"}
          onClick={(e) => {
            e.preventDefault();

            if (location) onClick?.(location);
          }}
          style={{
            display: "block",
            color: "black",
            textDecoration: "none",
            border: "1px solid silver",
            borderRadius: "1em",
            padding: ".5em",
            margin: ".5em",
          }}
        >
          <div>
            {location?.id}. {location?.name} (
            {location?.residents?.map((p) => p?.id).length})
          </div>
        </a>
      ))}
    </>
  );
};

export default Locations;
