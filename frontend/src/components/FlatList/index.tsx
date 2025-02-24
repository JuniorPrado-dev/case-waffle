import * as S from './style'

// Define o tipo para os itens da lista e para a função de renderização
interface FlatListProps<T> {
  data: T[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderItem: (item: T, index: number, extra?:any) => React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extra:any
  
}

// Componente FlatList genérico
export default function FlatList<T>({ data, renderItem,extra}: FlatListProps<T>) {
  return (
    <S.ListContainer>
      {data.map((item, index) => (
        <S.ListItem key={index}>
          {renderItem(item, index, extra)}
        </S.ListItem>
      ))}
    </S.ListContainer>
  );
}