import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../functions/formatter";

import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const summary = useSummary();

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
