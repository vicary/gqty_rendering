import { Box, Grommet, Layer, Tab, Tabs } from 'grommet'
import { hpe } from 'grommet-theme-hpe';
import Cars from './Cars';
import { useState } from 'react';
import Passengers from './Passengers';
import { Maybe, Passenger, UpdatePassengerInput, useMutation, useQuery } from './gqty';


function App() {

  const { cars, $refetch } = useQuery()
  const [index, setIndex] = useState(0);
  const onActive = (nextIndex: number) => setIndex(nextIndex);
  const [modalOpen, setModalOpen] = useState(false);
  const [activePassenger, setActivePassenger] = useState<Maybe<Passenger>>();

  const [updatePassenger] = useMutation((mutation, args: UpdatePassengerInput) => {
    const updatedPassenger = mutation.updatePassenger({
      id: parseInt(activePassenger?.id || "0", 10),
      input: {
        ...args,
      }
    })
    console.log(updatedPassenger?.id)
  }, {
    onComplete: () => {
      setModalOpen(false)
      setActivePassenger(null)
      $refetch(true)
    }
  })

  return (
    <Grommet full theme={hpe}>
      <h1>GQTY rendering</h1>

      {modalOpen && (<Layer position={'top'} onEsc={() => setModalOpen(false)} >
        <Box pad="medium" gap="medium" overflow="auto">
          <h1>assign {activePassenger?.name}</h1>
          <Cars onClick={c => {
            updatePassenger({
              args: {
                carID: c?.id,
              }
            })
          }} />
        </Box>
      </Layer >)}

      <Box >
        <Tabs activeIndex={index} onActive={onActive} alignSelf='stretch' flex>
          <Tab title="Cars" >
            <Cars />
          </Tab>
          <Tab title="Passengers">

            <p>here you can see another strange fetching loop - it only appears, when i use the useQuery hook in the parent component, and use another useQuery in a modal Oo</p>
            <p>lets render the number of cars ({cars().map(c => c?.id).length}) here, to see what happens when you click a passenger</p>
            <p>btw: it does not end in a fetching loop, when you remove the "activePassenger?.name" from the modal</p>

            <Passengers onClick={p => {
              setActivePassenger(p)
              setModalOpen(true)
            }} />
          </Tab>
        </Tabs>
      </Box>

    </Grommet>
  )
}

export default App
