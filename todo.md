=> Mettre les mappers dans les real repositories (enlever des uses case) exemple :

```
export class RevenueRealRepository implements IRevenueRepository {
  findAll(userId: string): Promise<Revenue[]> {
    const revenue = RevenueModel.findOne({ uid: id }).exec()
    return RevenueMapper.toDomain(revenue);
  }
}
```
