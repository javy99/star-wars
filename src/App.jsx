import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Grid, GridItem } from '@chakra-ui/react'
import {
  Episodes,
  Characters,
  Planets,
  Species,
  Navbar,
  Footer,
  Vehicles,
  Starships,
  EpisodesDetails,
  CharactersDetails,
  PlanetsDetails,
  SpeciesDetails,
  VehiclesDetails,
  StarshipsDetails,
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,
          lg: `"nav" "main "footer"`, // wider than 1024px
        }}
        templateColumns={{
          base: '1fr',
          lg: '1fr',
        }}
        // gap={4} // Optional: Add gap between grid items
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>

        <GridItem area="main" paddingX={'80px'} style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Episodes />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/species" element={<Species />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/episodes/:id" element={<EpisodesDetails />} />
            <Route path="/characters/:id" element={<CharactersDetails />} />
            <Route path="/planets/:id" element={<PlanetsDetails />} />
            <Route path="/species/:id" element={<SpeciesDetails />} />
            <Route path="/vehicles/:id" element={<VehiclesDetails />} />
            <Route path="/starships/:id" element={<StarshipsDetails />} />
          </Routes>
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>
      </Grid>
    </BrowserRouter>
  )
}

export default App
