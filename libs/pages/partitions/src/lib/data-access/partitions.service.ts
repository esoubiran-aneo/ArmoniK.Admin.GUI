import { Injectable } from "@angular/core";
import { GrpcPartitionsService } from "@armonik.admin.gui/partitions/data-access";
import { ClrDatagridStateInterface } from "@clr/angular";

@Injectable()
export class PartitionsService {
  constructor(
    private _grpcPartitionsService: GrpcPartitionsService,
  ) { }

  // TODO: Add error handling (must be done in the page component)
  // Do it in the page component. When the request fails, the loading spinner will stop and the error will be displayed under the table.
  list$(state: ClrDatagridStateInterface) {
    const params = this._grpcPartitionsService.createListRequestParams(state);
    const grpcParams = this._grpcPartitionsService.createListRequestOptions(params);

    return this._grpcPartitionsService.list$(grpcParams);
  }

  get$(partitionId: string) {
    return this._grpcPartitionsService.get$(partitionId);
  }
}
