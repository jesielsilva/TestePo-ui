 //Meu Ambiente esta local, esta URL deve ser alterada para seu ERP
 url = 'https://api.aneas.org.br:8052/api/framework/v1/consultaSQLServer/RealizaConsulta/API_DADOSBASICOS/0/S';
 constructor(private http: HttpClient) { }

 getCustomerList(): Observable<any> {
   return this.http.get(this.url);
 }

 deleteCustomer(customerId: string, type: string = '1') {
   return this.http.delete(this.url + `/${type}/${customerId}`);
 }

 getColumns(): Array<PoTableColumn> {
   return [
     { property: 'code', label: 'Código'},
     { property: 'storeId', label: 'Loja' },
     { property: 'name', label: 'Nome' },
     { property: 'type', label: 'Tipo' },
     { property: 'entityType', label: 'Fisica/Juridica' },
     { property: 'registerSituation', label: 'Situação' },
   ];
 }
