import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeController } from './challenge.controller';
import { ChallengeService } from './challenge.service';
import { CacheInterceptor } from '../cache/interceptors/cache.interceptor';

describe('ChallengeController', () => {
  let controller: ChallengeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChallengeController],
      providers: [
        { provide: ChallengeService, useValue: {} },
        { provide: CacheInterceptor, useValue: { intercept: jest.fn() } },
      ],
    })
      .overrideInterceptor(CacheInterceptor)
      .useValue({ intercept: jest.fn() })
      .compile();

    controller = module.get<ChallengeController>(ChallengeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
