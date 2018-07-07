import { HomepageRoutingModule } from './homepage-routing.module';

describe('HomepageRoutingModule', () => {
  let homepageRoutingModule: HomepageRoutingModule;

  beforeEach(() => {
    homepageRoutingModule = new HomepageRoutingModule();
  });

  it('should create an instance', () => {
    expect(homepageRoutingModule).toBeTruthy();
  });
});
