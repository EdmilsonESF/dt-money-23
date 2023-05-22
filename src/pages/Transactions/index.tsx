import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable,PriceHighlight } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header/>
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tr>
            <td width='50%'>Desenvolvimento</td>
            <td>
              <PriceHighlight variant="income">
                R$ 12.000,00
              </PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2023</td>
          </tr>

          <tr>
            <td width='50%'>Hamburger</td>
            <td>
              <PriceHighlight variant="outcome">
                - R$ 59,00
              </PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2023</td>
          </tr>
        </TransactionsTable>
      </TransactionsContainer>

      
    </div>
  )
}