export interface ICategory {
    id: string;
    name: string;
    chilled?: Array<ICategory>
}