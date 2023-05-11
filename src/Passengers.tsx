import { DataTable } from "grommet"
import { Maybe, Passenger, useQuery } from "./gqty"


interface PassengersProps {
  onClick?: (p: Maybe<Passenger>) => void
}

const Passengers: React.FC<PassengersProps> = ({ onClick }) => {

  const { passengers } = useQuery()

  console.log("passengers render")

  return (
    <>
      <p>click a passenger to assign a car</p>
      <DataTable
        fill
        onClickRow={({ datum }) => onClick && onClick(datum)}
        data={passengers()}
        columns={[
          {
            property: 'id',
            header: 'Id',
            primary: true,
          },
          {
            property: 'name',
            header: 'Name',
          },
          {
            property: 'car',
            header: 'sitting in car',
            render: (p) => {
              return p?.car?.brand
            },
          },
        ]}
      />
    </>
  )
}


export default Passengers