import { TestBed } from '@angular/core/testing';

import { AlunosListalunosListService } from './alunos-listalunos-list.service';

describe('AlunosListalunosListService', () => {
  let service: AlunosListalunosListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunosListalunosListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
