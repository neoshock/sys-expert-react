import BonusCalculatorPage from './pages/bonus_calculator_page';
import BonusTableView from './pages/bonus_table_view';
import './styles/main.css';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24 flex-row">

      <div className="image-bg">
      </div>

      <div className="person-bg">

      </div>

      <div className="flex-1 p-6">
        <BonusTableView />
      </div>

      <div className="flex-1 p-6">
        <BonusCalculatorPage />
      </div>

    </main>
  )
}
