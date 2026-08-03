import { Injectable } from "@nestjs/common";
import { DtoPedido } from "./dto";

@Injectable()

export class PedidosServicie{
    private pedidosPost:DtoPedido[]=[]

    PostPedido(pedido:DtoPedido){
         this.pedidosPost.push({
            ...pedido,
            id:this.pedidosPost.length + 1
        })
        

    } 
    getPedidos(){
        return this.pedidosPost
    }
}