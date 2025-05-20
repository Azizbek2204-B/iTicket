import { Inject, Injectable } from "@nestjs/common";
import { CreateLangDto } from "./dto/create-lang.dto";
import { UpdateLangDto } from "./dto/update-lang.dto";
import { Model } from "mongoose";
import { Lang } from "./schemas/lang.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class LangService {
  constructor(@InjectModel("Lang") private readonly langModel: Model<Lang>) {}
  create(createLangDto: CreateLangDto) {
    return this.langModel.create(createLangDto);
  }

  findAll() {
    return this.langModel.find();
  }

  findOne(id: number) {
    return this.langModel.findById(id);
  }

  update(id: number, updateLangDto: UpdateLangDto) {
    return this.langModel.updateOne({ _id: id }, updateLangDto);
  }

  remove(id: number) {
    return this.langModel.findByIdAndDelete(id);
  }
}
