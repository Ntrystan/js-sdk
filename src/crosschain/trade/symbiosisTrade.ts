import { Percent, Token, TokenAmount } from 'src/entities'

export type SymbiosisTradeType = 'dex' | '1inch' | 'open-ocean'

export interface SymbiosisTrade {
    init(): Promise<this>
    tradeType: SymbiosisTradeType
    callData: string
    tokenAmountIn: TokenAmount
    amountOut: TokenAmount
    route: Token[]
    priceImpact: Percent
    routerAddress: string
}
