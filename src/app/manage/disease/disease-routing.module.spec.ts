import { DiseaseRoutingModule } from './disease-routing.module';

describe('DiseaseRoutingModule', () => {
  let diseaseRoutingModule: DiseaseRoutingModule;

  beforeEach(() => {
    diseaseRoutingModule = new DiseaseRoutingModule();
  });

  it('should create an instance', () => {
    expect(diseaseRoutingModule).toBeTruthy();
  });
});
