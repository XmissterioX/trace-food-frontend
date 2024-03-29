import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.turnkeyledger.tracefood{
   export class Trace {
      timestamp: Date;
      location: Address;
      action: string;
      description: string;
      campanyInvolved: string;
   }
   export enum OrderStatus {
      INITIATED,
      DELIVERING,
      DELIVERED,
      CONFIRMED,
   }
   export class Address {
      city: string;
      state: string;
      country: string;
      postalCode: string;
   }
   export class Order extends Asset {
      orderId: string;
      commodityName: string;
      commodityQuantity: string;
      orderStatus: OrderStatus;
      traces: Trace[];
      crates: Crate[];
      supplier: Trader;
      restaurant: Trader;
   }
   export class Crate extends Asset {
      crateId: string;
      name: string;
      description: string;
      order: Order;
   }
   export abstract class Trader extends Participant {
      companyName: string;
      address: Address;
   }
   export class Supplier extends Trader {
      supplierId: string;
   }
   export class Restaurant extends Trader {
      restauId: string;
   }
   export class AddTraceCrate extends Transaction {
      crateId: string;
      location: Address;
      action: string;
      description: string;
      campanyInvolved: string;
   }
   export class MakeCrate extends Transaction {
      crate: Crate;
      trace: Trace;
   }
   export class MakeOrder extends Transaction {
      order: Order;
      trace: Trace;
   }
   export class Acto extends Transaction {
      order: Order;
      crate: Crate;
   }
   export class Actom extends Transaction {
      order: Order;
      crates: Crate[];
   }
   export class AddTraceOrder extends Transaction {
      orderId: string;
      location: Address;
      action: string;
      description: string;
      campanyInvolved: string;
   }
   export class UpdateOrderState extends Transaction {
      orderId: string;
      orderStatus: OrderStatus;
   }
   export class ConfirmOrder extends Transaction {
      orderId: string;
   }
// }
