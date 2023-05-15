import { Location, Maybe, useQuery } from "./gqty";

interface LocationsProps {
  onClick?: (p: Maybe<Location>) => void;
}

const Locations: React.FC<LocationsProps> = ({ onClick }) => {
  const { locations } = useQuery();

  console.log("cars render");

  return (
    <>
      <p>here you can see, gqty fetches the whole query on hover</p>

      {locations()?.results?.map((location) => (
        <a
          href={onClick ? "javascript:void(0)" : undefined}
          key={location?.id ?? "0"}
          onClick={(e) => {
            e.preventDefault();

            onClick?.(location);
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
