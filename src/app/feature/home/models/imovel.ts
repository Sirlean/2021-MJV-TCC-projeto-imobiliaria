export interface Imovel 
{
    id: number;
    tipo_imovel: "apartamento" | "casa" | "flat" | "sala comercial" | "terreno";
    tipo_negocio: "locação" | "venda";
    titulo: string;
    descricao: string;
    data_disponivel: string;
    valor: number;
    imagens?: Array<string>;
    endereco: string;
    cep?: string;
    quantidade_dorms?: number;
    quantidade_banheiros?: number;
    quantidade_vagas?: number;
    metragem: number;  
}