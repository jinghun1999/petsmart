import { Drug.RoutingModule } from './drug.routing.module';

describe('Drug.RoutingModule', () => {
  let drugRoutingModule: Drug.RoutingModule;

  beforeEach(() => {
    drugRoutingModule = new Drug.RoutingModule();
  });

  it('should create an instance', () => {
    expect(drugRoutingModule).toBeTruthy();
  });
});
