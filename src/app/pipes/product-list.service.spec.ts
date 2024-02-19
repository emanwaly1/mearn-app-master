import { ProductListService } from "./proudctList.pipe";

describe('ProductListService', () => {
  let service: ProductListService;

  beforeEach(() => {
    service = new ProductListService();
  });

  it('should have 9 products', () => {
    expect(service.Products.length).toEqual(9);
  });
});

export { ProductListService };
