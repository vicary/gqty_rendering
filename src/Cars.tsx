import { DataTable } from "grommet"
import { Car, Maybe, useQuery } from "./gqty"


interface CarsProps {
  onClick?: (p: Maybe<Car>) => void
}

const Cars: React.FC<CarsProps> = ({ onClick }) => {

  const q = useQuery()

  console.log("cars render")

  return (
    <>
      <p>here you can see, gqty fetches the whole query on hover</p>
      <DataTable
        fill
        onClickRow={({ datum }) => onClick && onClick(datum)}
        data={q.cars()}
        columns={[
          {
            property: 'id',
            header: 'Id',
            primary: true,
          },
          {
            property: 'brand',
            header: 'Brand',
          },
          {
            property: 'passengers',
            header: 'Passengers count',
            render: (c) => {
              return c?.passengers?.map(p => p.id).length
            },
          },
        ]}
      />
    </>
  )
}


export default Cars