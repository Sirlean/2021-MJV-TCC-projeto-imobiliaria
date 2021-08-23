import { Injectable } from '@angular/core';
import { FiltroImovel } from '../models/filtro-imovel';
import { Imovel } from '../models/imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  constructor() { }
 
  tipo_imovel = [ "apartamento", "casa" , "flat", "sala comercial" , "terreno"];
  tipo_negocio = [ "venda", "locação" ];

  //mover para service
  lista_imovel: Array<Imovel> = [
    { 
      id: 1,
      tipo_imovel: "apartamento", 
      tipo_negocio: "venda", 
      data_disponivel: '2020-01-01', 
      descricao:"senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus.",
      endereco: "Rua Werner Goldberg, 157",
      metragem: 87.7,
      titulo: "Apartamento Decorado",
      valor: 600000,
      quantidade_vagas: 2,
      quantidade_dorms: 3,
      imagens: [
        "https://www.incorposul.com.br/wp-content/uploads/2019/08/como-comprar-um-apartamento-perfeito.jpg.webp",
        "https://cdn.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1-1024x576.jpg",
        "https://www.incorposul.com.br/wp-content/uploads/2019/08/seu-apartamento-suas-escolhas.jpg.webp",
      ]
    },
    { 
      id: 2,
      tipo_imovel: "casa", 
      tipo_negocio: "venda", 
      data_disponivel: '2020-01-01', 
      descricao:"blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris",
      endereco: "Alameda Xingu, 157",
      metragem: 180,
      titulo: "Casa Decorada",
      valor: 1500000,
      quantidade_banheiros: 3,
      imagens: [
        "https://www.incorposul.com.br/wp-content/uploads/2019/08/seu-apartamento-suas-escolhas.jpg.webp",
        "https://www.incorposul.com.br/wp-content/uploads/2019/08/como-comprar-um-apartamento-na-planta.jpg.webp",
        "https://cdn.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1-1024x576.jpg",
      ]
    },
    { 
      id: 3,
      tipo_imovel: "casa", 
      tipo_negocio: "venda", 
      data_disponivel: '2020-01-01', 
      descricao:"blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris",
      endereco: "Alameda Xingu, 157",
      metragem: 180,
      titulo: "Casa Decorada",
      valor: 1500000,
      quantidade_banheiros: 3,
      quantidade_vagas: 2,
      imagens: [
        "https://cdn.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1-1024x576.jpg",
        "https://www.incorposul.com.br/wp-content/uploads/2019/08/seu-apartamento-suas-escolhas.jpg.webp",
        "https://www.incorposul.com.br/wp-content/uploads/2019/08/como-comprar-um-apartamento-na-planta.jpg.webp",
      ]
    },
    { 
      id: 4,
      tipo_imovel: "flat", 
      tipo_negocio: "locação", 
      data_disponivel: '2020-01-01', 
      descricao:"blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris",
      endereco: "Alameda Xingu, 157",
      metragem: 120,
      titulo: "Casa Decorada",
      valor: 4500,
      quantidade_banheiros: 3,
      quantidade_vagas: 2,
      quantidade_dorms: 3,
      imagens: [
        "https://www.incorposul.com.br/wp-content/uploads/2019/08/como-comprar-um-apartamento-na-planta.jpg.webp",
        "https://www.incorposul.com.br/wp-content/uploads/2019/08/seu-apartamento-suas-escolhas.jpg.webp",
        "https://cdn.incorposul.com.br/wp-content/uploads/2019/08/cropped-como-comprar-um-apartamento-1-1024x576.jpg",
      ]
    },
    { 
      id: 5,
      tipo_imovel: "casa", 
      tipo_negocio: "venda", 
      data_disponivel: '2020-01-01', 
      descricao:"blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris",
      endereco: "Alameda Grajaú, 200",
      cep: "06464-125",
      metragem: 300,
      titulo: "Casa Decorada Alto Padrão",
      valor: 4000000,
      quantidade_banheiros: 4,
      quantidade_dorms: 6,
      quantidade_vagas: 6,
      imagens: [
        "https://www.imovelweb.com.br/noticias/wp-content/uploads/2013/07/condominio-alto-padrao.jpg",
        "https://www.imovelweb.com.br/noticias/wp-content/uploads/2021/07/imovelweb_imovelweb_image_40-1024x705.jpeg",
        "https://p2.trrsf.com/image/fget/cf/620/0/images.terra.com/2018/05/24/mansao-clean-elegante.jpg",
      ]
    },
    { 
      id: 6,
      tipo_imovel: "casa", 
      tipo_negocio: "locação", 
      data_disponivel: '2020-01-01', 
      descricao:"blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris",
      endereco: "Alameda Santos, 200 - São Paulo",
      cep: "01212-025",
      metragem: 320,
      titulo: "Casa Decorada Alto Padrão",
      valor: 15000,
      quantidade_banheiros: 5,
      quantidade_dorms: 5,
      quantidade_vagas: 7,
      imagens: [
        "https://p2.trrsf.com/image/fget/cf/620/0/images.terra.com/2018/05/24/mansao-modelo-moderna-contemporaneo.jpg",
        "https://p2.trrsf.com/image/fget/cf/620/0/images.terra.com/2018/05/24/mansao-contemporanea.jpg",
        "https://p2.trrsf.com/image/fget/cf/620/0/images.terra.com/2018/05/24/mansao-rustica.jpg",
        "https://p2.trrsf.com/image/fget/cf/620/0/images.terra.com/2018/05/24/mansao-com-decoracao-de-madeira-rustica.jpg",
      ]
    }
  ];

  obterListaTipoImovel(): Array<string>{
    return this.tipo_imovel;
  }
  
  obterListaTipoNegocio(): Array<string>{
    return this.tipo_negocio;
  }
  
  pesquisarImoveis(filtro: FiltroImovel) : Array<Imovel> {
    let imoveis = this.lista_imovel;
    if(filtro && filtro.tipo_imovel)  
    {
      imoveis = imoveis.filter((imovel)=> imovel.tipo_imovel.toUpperCase() === filtro.tipo_imovel?.toUpperCase()) ;
    }
    if(filtro && filtro.tipo_negocio)  
    {
      imoveis = imoveis.filter((imovel)=> imovel.tipo_negocio.toUpperCase() === filtro.tipo_negocio?.toUpperCase()) ;
    }      
    return imoveis;
  }
    
  obterImovelPorId(id: number): Imovel | undefined {
    let imoveis = this.lista_imovel;
    if(id)  
    {
      imoveis = imoveis.filter((imovel)=> imovel.id == id) ;
    }
    if(imoveis.length === 0)
    {
      return undefined;
    }
    return imoveis[0];
  }
}
