import { JobPosting, Company, City, Province, EmploymentType, ExperienceLevel, JobCategory, CompanySize, Prisma } from '@prisma/client'; 
export type SortByType = 'newest' | 'oldest' | 'company_asc' | 'company_desc';

export type JobPostingFeatured = Pick<
  JobPosting,
  | 'id'
  | 'title'
  | 'description'       
  | 'employmentType'
  | 'experienceLevel'   
  | 'category'          
  | 'isRemote'
  | 'createdAt'
  | 'publishedAt'
  | 'salaryMin'
  | 'salaryMax'
  | 'salaryCurrency'
  | 'isPriority'
  | 'tags'  
  | 'benefits' 
  | 'requirements' 
  | 'applicationDeadline'           
> & {
  company: Pick<Company, 'id' | 'name' | 'logo' | 'size'> | null;
  city: Pick<City, 'name'> | null;
  province: Pick<Province, 'name'> | null;
};

// Interface for the parameters passed to the getJobs function
export interface JobPostingSearchAndFilterParams {
  take?: number;
  skip?: number;
  orderBy?: Prisma.JobPostingOrderByWithRelationInput ; 
  
  jobTitle?: string;
  locationQuery?: string;

  categories?: JobCategory[];
  employmentTypes?: EmploymentType[];
  experienceLevels?: ExperienceLevel[];
  companySizes?: CompanySize[];
  isRemote?: boolean;  
  companyId?: string;
}

export interface GetJobsParams {
  // Pagination
  take?: number;
  skip?: number;
  
  // Sorting (menggantikan orderBy)
  sortBy?: SortByType;

  // Search Parameters
  jobTitle?: string; 
  locationQuery?: string; 

  // Filter Parameters
  categories?: JobCategory[] | string | string[];
  employmentTypes?: EmploymentType[] | string | string[];
  experienceLevels?: ExperienceLevel[] | string | string[];
  companySizes?: CompanySize[] | string | string[];
  isRemote?: boolean | string;
  companyId?: string;
  
  companyLocationQuery?: string;
  companyQuery?: string;
  startDate?: string;
  endDate?: string;

  // Response options
  includePagination?: string | boolean; 

}

export type JobPostingDetailed = JobPosting & {
  company: Company | null;
  city: City | null;
  province: Province | null;
};

//  Company Types
export type CompanyWithLocation = Company & {
  province: Province | null;
  city: City | null;
  _count: {
    jobPostings: number;
  };
};

export type CompanyDetailed = Company & {
  province: Province | null;
  city: City | null;
  admin: {
    id: string;
    name: string | null;
    email: string;
    profileImage: string | null;
  };
  stats: {
    activeJobs: number;
    totalReviews: number;
    averageRating: number;
    ratings: {
      culture: number;
      workLifeBalance: number;
      facilities: number;
      career: number;
    };
  };
};

export interface GetCompaniesParams {
  take?: number;
  skip?: number;
  search?: string;
  industry?: string;
  size?: CompanySize;
  provinceId?: string;
  cityId?: string;
}

export interface CompanyJobsParams {
  companyId: string;
  take?: number;
  skip?: number;
  category?: JobCategory;
  employmentType?: EmploymentType;
  experienceLevel?: ExperienceLevel;
  search?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  pagination?: {
    total: number;
    page: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Job Update Data Types
export interface JobUpdateData {
  title?: string;
  description?: string;
  requirements?: string[];
  benefits?: string[];
  tags?: string[];
  category?: JobCategory;
  employmentType?: EmploymentType;
  workType?: string;
  experienceLevel?: ExperienceLevel;
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency?: string;
  location?: string;
  provinceId?: string | null;
  cityId?: string | null;
  applicationDeadline?: Date;
  isPriority?: boolean;
  isActive?: boolean;
  isRemote?: boolean;
  latitude?: number;
  longitude?: number;
  country?: string;
  publishedAt?: Date | null;
  preSelectionTestId?: string | null;
  banner?: string;
  updatedAt?: Date;
}

export type ProcessedJobUpdateData = JobUpdateData;

export interface GetJobsResult {
  jobs: JobPostingFeatured[];
  pagination?: {
    total: number;
    page: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}