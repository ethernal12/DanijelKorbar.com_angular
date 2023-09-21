export interface ButtonToolbarModel {
  tekst: string
  ikona: string
  route?: string
  style?: string
  onActive?: boolean
  onClick?: (() => void)
}
