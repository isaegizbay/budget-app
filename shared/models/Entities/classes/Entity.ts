import {
  EntityActions,
  EntityRecord,
} from "~/shared/models/Entities/types/entity";

export abstract class Entity implements EntityRecord {
  abstract recordId: number;
  abstract id: string;
  abstract get actions(): EntityActions[];
}
