import { BentoGrid } from './components/BentoGrid';
import { MainLayout } from './layouts/MainLayout';
import { gridConfig } from './data/gridConfig';

function App() {
  return (
    <MainLayout>
      <BentoGrid>
        {gridConfig.map((item) => (
          <item.Component
            key={item.id}
            colSpan={item.colSpan}
            rowSpan={item.rowSpan}
          />
        ))}

        {/* Fillers for demonstration if needed, but config should drive it */}
      </BentoGrid>
    </MainLayout>
  )
}

export default App
