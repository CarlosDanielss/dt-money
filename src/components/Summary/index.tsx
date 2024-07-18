import { useContext } from "react";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../functions/formatter";

import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acumulator, transaction) => {
      if (transaction.type === "income") {
        acumulator.income += transaction.price;
        acumulator.total += transaction.price;
      } else {
        acumulator.outcome += transaction.price;
        acumulator.total -= transaction.price;
      }

      return acumulator;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <SummaryCard $iconColor="green-300">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard $iconColor="red-300">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard $iconColor="white" $variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
