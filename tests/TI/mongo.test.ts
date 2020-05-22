import mongoose, { Model, Document } from "mongoose";

describe("Mongo", () => {
  const mongoData = [
    {
      name: "name1",
      uid: "uid1",
    },
    {
      name: "name2",
      uid: "uid2",
    },
    {
      name: "name3",
      uid: "uid3",
    },
  ];

  type MongoSchema = Document & { uid: string; name: string };

  const mongoSchema = new mongoose.Schema({
    uid: String,
    name: String,
  });

  const MongoModel: Model<MongoSchema> = mongoose.model<MongoSchema>("mongos", mongoSchema);

  beforeEach(async () => {
    const uri = "mongodb://localhost:27017/mon-registre-test";
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    await MongoModel.remove({}).exec();
    await MongoModel.insertMany(mongoData);
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  it("should be able to find one document", async () => {
    const uid = "uid1";

    const findedModel = await MongoModel.findOne({ uid }).exec();

    if (findedModel) {
      expect(!!findedModel).toEqual(true);
      expect(findedModel.uid).toEqual(uid);
      expect(findedModel.name).toEqual("name1");
    }
  });

  it("should be able to find all documents", async () => {
    const findedModel = await MongoModel.find().exec();

    if (findedModel) {
      expect(!!findedModel).toEqual(true);

      expect(findedModel.length).toEqual(mongoData.length);
    }
  });

  it("should be able to remove one documents", async () => {
    const uid = "uid1";

    await MongoModel.findOneAndDelete({ uid }).exec();
    const findedModel = await MongoModel.findOne({ uid }).exec();

    expect(!!findedModel).toEqual(false);
  });

  it("should be able to create a document", async () => {
    const uid = "uid4";
    const name = "name4";

    await new MongoModel({ uid, name }).save();
    const findedModel = await MongoModel.findOne({ uid }).exec();

    if (findedModel) {
      expect(!!findedModel).toEqual(true);
      expect(findedModel.uid).toEqual(uid);
      expect(findedModel.name).toEqual(name);
    }
  });
});
