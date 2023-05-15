import { Character, Maybe, useQuery } from "./gqty";

interface CharactersProps {
  onClick?: (p: Maybe<Character>) => void;
}

const Characters: React.FC<CharactersProps> = ({ onClick }) => {
  const { characters } = useQuery();

  console.log("passengers render");

  return (
    <>
      <p>click a passenger to assign a car</p>

      {characters()?.results?.map((character) => (
        <a
          href={onClick ? "javascript:void(0)" : undefined}
          key={character?.id ?? "0"}
          onClick={(e) => {
            e.preventDefault();
            onClick?.(character);
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
            {character?.id}. {character?.name} (
            {character?.location?.name || "nowhere"})
          </div>
        </a>
      ))}

      {/* <DataTable
        fill
        onClickRow={({ datum }) => onClick && onClick(datum)}
        data={passengers()}
        columns={[
          {
            property: "id",
            header: "Id",
            primary: true,
          },
          {
            property: "name",
            header: "Name",
          },
          {
            property: "car",
            header: "sitting in car",
            render: (p) => {
              return p?.car?.brand;
            },
          },
        ]}
      /> */}
    </>
  );
};

export default Characters;
