import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
  namespace Responses {
    export type $400 =
      /**
       * example:
       * {
       *   "type": "BadRequestException",
       *   "message": "Bad request"
       * }
       */
      Schemas.BadRequestException;
    export type $403 =
      /**
       * example:
       * {
       *   "type": "NotAuthorizedException",
       *   "message": "Not authorized"
       * }
       */
      Schemas.NotAuthorizedException;
    export type $404 =
      /**
       * example:
       * {
       *   "type": "ResourceNotFoundException",
       *   "message": "Resource of type <T> identified by <I> not found"
       * }
       */
      Schemas.ResourceNotFoundException;
    export type $429 =
      /**
       * example:
       * {
       *   "type": "TooManyRequestsException",
       *   "message": "Too many requests"
       * }
       */
      Schemas.TooManyRequestsException;
    export type $500 =
      /**
       * example:
       * {
       *   "type": "InternalServerException",
       *   "message": "Unexpected error"
       * }
       */
      Schemas.InternalServerException;
  }
  namespace Schemas {
    /**
     * example:
     * {
     *   "type": "BadRequestException",
     *   "message": "Bad request"
     * }
     */
    export interface BadRequestException {
      type?: string;
      message?: string;
    }
    export interface Course {
      id?: string;
      /**
       * example:
       * PROG1
       */
      ref?: string;
      /**
       * example:
       * Algorithmics
       */
      name?: string;
      credits?: number;
      total_hours?: number;
    }
    export interface CreateDelayPenaltyChange {
      interest_percent?: number;
      interest_timerate?: 'DAILY';
      grace_delay?: number;
      applicability_delay_after_grace?: number;
    }
    export interface CreateFee {
      type?: 'TUITION' | 'HARDWARE';
      comment?: string;
      total_amount?: number;
      creation_datetime?: string; // date-time
      due_datetime?: string; // date-time
    }
    export interface CreatePayment {
      type?: 'CASH' | 'MOBILE_MONEY' | 'SCHOLARSHIP' | 'FIX';
      amount?: number;
      comment?: string;
    }
    export interface DelayPenalty {
      interest_percent?: number;
      interest_timerate?: 'DAILY';
      grace_delay?: number;
      applicability_delay_after_grace?: number;
      id?: string;
      creation_datetime?: string; // date-time
    }
    export type EnableStatus = 'ENABLED' | 'DISABLED';
    export interface Exception {
      type?: string;
      message?: string;
    }
    export interface Fee {
      type?: 'TUITION' | 'HARDWARE';
      comment?: string;
      total_amount?: number;
      creation_datetime?: string; // date-time
      due_datetime?: string; // date-time
      id?: string;
      student_id?: string;
      remaining_amount?: number;
      status?: 'UNPAID' | 'PAID' | 'LATE';
    }
    export interface Group {
      id?: string;
      /**
       * example:
       * The group number one
       */
      name?: string;
      /**
       * example:
       * G1
       */
      ref?: string;
      creation_datetime?: string; // date-time
    }
    /**
     * example:
     * {
     *   "type": "InternalServerException",
     *   "message": "Unexpected error"
     * }
     */
    export interface InternalServerException {
      type?: string;
      message?: string;
    }
    export interface Manager {
      id?: string;
      /**
       * example:
       * STD000001
       */
      ref?: string;
      first_name?: string;
      last_name?: string;
      sex?: 'M' | 'F';
      birth_date?: string; // date
      address?: string;
      phone?: string;
      email?: string;
      entrance_datetime?: string; // date-time
      status?: EnableStatus;
    }
    /**
     * example:
     * {
     *   "type": "NotAuthorizedException",
     *   "message": "Not authorized"
     * }
     */
    export interface NotAuthorizedException {
      type?: string;
      message?: string;
    }
    /**
     * Start at `1`
     */
    export type Page = number;
    /**
     * Cannot exceed `500`
     */
    export type PageSize = number;
    export interface Payment {
      type?: 'CASH' | 'MOBILE_MONEY' | 'SCHOLARSHIP' | 'FIX';
      amount?: number;
      comment?: string;
      id?: string;
      fee_id?: string;
      creation_datetime?: string; // date-time
    }
    /**
     * example:
     * {
     *   "type": "ResourceNotFoundException",
     *   "message": "Resource of type <T> identified by <I> not found"
     * }
     */
    export interface ResourceNotFoundException {
      type?: string;
      message?: string;
    }
    export interface Student {
      id?: string;
      /**
       * example:
       * STD000001
       */
      ref?: string;
      first_name?: string;
      last_name?: string;
      sex?: 'M' | 'F';
      birth_date?: string; // date
      address?: string;
      phone?: string;
      email?: string;
      entrance_datetime?: string; // date-time
      status?: EnableStatus;
    }
    export interface Teacher {
      id?: string;
      /**
       * example:
       * STD000001
       */
      ref?: string;
      first_name?: string;
      last_name?: string;
      sex?: 'M' | 'F';
      birth_date?: string; // date
      address?: string;
      phone?: string;
      email?: string;
      entrance_datetime?: string; // date-time
      status?: EnableStatus;
    }
    /**
     * example:
     * {
     *   "type": "TooManyRequestsException",
     *   "message": "Too many requests"
     * }
     */
    export interface TooManyRequestsException {
      type?: string;
      message?: string;
    }
    export interface User {
      id?: string;
      /**
       * example:
       * STD000001
       */
      ref?: string;
      first_name?: string;
      last_name?: string;
      sex?: 'M' | 'F';
      birth_date?: string; // date
      address?: string;
      phone?: string;
      email?: string;
      entrance_datetime?: string; // date-time
      status?: EnableStatus;
    }
    export interface Whoami {
      id?: string;
      role?: 'STUDENT' | 'TEACHER' | 'MANAGER';
      bearer?: string;
    }
  }
}
declare namespace Paths {
  namespace CreateDelayPenaltyChange {
    export type RequestBody = Components.Schemas.CreateDelayPenaltyChange;
    namespace Responses {
      export type $200 = Components.Schemas.DelayPenalty;
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace CreateOrUpdateCourses {
    export type RequestBody = Components.Schemas.Course;
    namespace Responses {
      export type $200 = Components.Schemas.Course;
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace CreateOrUpdateGroups {
    export type RequestBody = Components.Schemas.Group[];
    namespace Responses {
      export type $200 = Components.Schemas.Group[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace CreateOrUpdateStudents {
    export type RequestBody = Components.Schemas.Student[];
    namespace Responses {
      export type $200 = {
        id?: string;
        /**
         * example:
         * STD000001
         */
        ref?: string;
        first_name?: string;
        last_name?: string;
        sex?: 'M' | 'F';
        birth_date?: string; // date
        address?: string;
        phone?: string;
        email?: string;
        entrance_datetime?: string; // date-time
        status?: Components.Schemas.EnableStatus;
      }[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace CreateOrUpdateTeachers {
    export type RequestBody = Components.Schemas.Teacher[];
    namespace Responses {
      export type $200 = Components.Schemas.Teacher[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace CreateStudentFees {
    namespace Parameters {
      export type StudentId = string;
    }
    export interface PathParameters {
      student_id: Parameters.StudentId;
    }
    export type RequestBody = Components.Schemas.CreateFee[];
    namespace Responses {
      export type $200 = Components.Schemas.Fee[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace CreateStudentPayments {
    namespace Parameters {
      export type FeeId = string;
      export type StudentId = string;
    }
    export interface PathParameters {
      student_id: Parameters.StudentId;
      fee_id: Parameters.FeeId;
    }
    export type RequestBody = Components.Schemas.CreatePayment[];
    namespace Responses {
      export type $200 = Components.Schemas.Payment[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetCourseById {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Course;
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetCourses {
    namespace Responses {
      export type $200 = Components.Schemas.Course[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetDelayPenalty {
    namespace Responses {
      export type $200 = Components.Schemas.DelayPenalty;
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetFees {
    namespace Parameters {
      export type Page = /* Start at `1` */ Components.Schemas.Page;
      export type PageSize = /* Cannot exceed `500` */ Components.Schemas.PageSize;
      export type Status = 'UNPAID' | 'LATE' | 'PAID';
    }
    export interface QueryParameters {
      status?: Parameters.Status;
      page?: Parameters.Page;
      page_size?: Parameters.PageSize;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Fee[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetGroupById {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Group;
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetGroups {
    namespace Responses {
      export type $200 = Components.Schemas.Group[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetManagerById {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Manager;
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetManagers {
    namespace Parameters {
      export type Page = /* Start at `1` */ Components.Schemas.Page;
      export type PageSize = /* Cannot exceed `500` */ Components.Schemas.PageSize;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      page_size?: Parameters.PageSize;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Manager[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetStudentById {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Student;
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetStudentFeeById {
    namespace Parameters {
      export type FeeId = string;
      export type StudentId = string;
    }
    export interface PathParameters {
      student_id: Parameters.StudentId;
      fee_id: Parameters.FeeId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Fee;
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetStudentFees {
    namespace Parameters {
      export type Page = /* Start at `1` */ Components.Schemas.Page;
      export type PageSize = /* Cannot exceed `500` */ Components.Schemas.PageSize;
      export type Status = 'UNPAID' | 'PAID' | 'LATE';
      export type StudentId = string;
    }
    export interface PathParameters {
      student_id: Parameters.StudentId;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      page_size?: Parameters.PageSize;
      status?: Parameters.Status;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Fee[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetStudentPayments {
    namespace Parameters {
      export type FeeId = string;
      export type Page = /* Start at `1` */ Components.Schemas.Page;
      export type PageSize = /* Cannot exceed `500` */ Components.Schemas.PageSize;
      export type StudentId = string;
    }
    export interface PathParameters {
      student_id: Parameters.StudentId;
      fee_id: Parameters.FeeId;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      page_size?: Parameters.PageSize;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Payment[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetStudents {
    namespace Parameters {
      export type FirstName = string;
      export type LastName = string;
      export type Page = /* Start at `1` */ Components.Schemas.Page;
      export type PageSize = /* Cannot exceed `500` */ Components.Schemas.PageSize;
      export type Ref = string;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      page_size?: Parameters.PageSize;
      ref?: Parameters.Ref;
      first_name?: Parameters.FirstName;
      last_name?: Parameters.LastName;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Student[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetTeacherById {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Teacher;
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace GetTeachers {
    namespace Parameters {
      export type FirstName = string;
      export type LastName = string;
      export type Page = /* Start at `1` */ Components.Schemas.Page;
      export type PageSize = /* Cannot exceed `500` */ Components.Schemas.PageSize;
      export type Ref = string;
    }
    export interface QueryParameters {
      page?: Parameters.Page;
      page_size?: Parameters.PageSize;
      ref?: Parameters.Ref;
      first_name?: Parameters.FirstName;
      last_name?: Parameters.LastName;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Teacher[];
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace Ping {
    namespace Responses {
      /**
       * example:
       * pong
       */
      export type $200 = string;
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
  namespace Whoami {
    namespace Responses {
      export type $200 = Components.Schemas.Whoami;
      export type $400 = Components.Responses.$400;
      export type $403 = Components.Responses.$403;
      export type $404 = Components.Responses.$404;
      export type $429 = Components.Responses.$429;
      export type $500 = Components.Responses.$500;
    }
  }
}

export interface OperationMethods {
  /**
   * whoami - Who am I? Tells you who you are.
   */
  'whoami'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.Whoami.Responses.$200>;
  /**
   * ping - pong
   */
  'ping'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.Ping.Responses.$200>;
  /**
   * getGroupById - Get group by identifier
   */
  'getGroupById'(
    parameters?: Parameters<Paths.GetGroupById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetGroupById.Responses.$200>;
  /**
   * getGroups - Get all groups
   */
  'getGroups'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetGroups.Responses.$200>;
  /**
   * createOrUpdateGroups - Create new groups or update existing groups
   *
   * Update groups when `id` are provided, create them otherwise.
   */
  'createOrUpdateGroups'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateOrUpdateGroups.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.CreateOrUpdateGroups.Responses.$200>;
  /**
   * getStudentById - Get student by identifier
   */
  'getStudentById'(
    parameters?: Parameters<Paths.GetStudentById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetStudentById.Responses.$200>;
  /**
   * getStudents - Get all students
   */
  'getStudents'(
    parameters?: Parameters<Paths.GetStudents.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetStudents.Responses.$200>;
  /**
   * createOrUpdateStudents - Create new students or update existing students
   *
   * Update students when `id` are provided, create them otherwise.
   */
  'createOrUpdateStudents'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateOrUpdateStudents.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.CreateOrUpdateStudents.Responses.$200>;
  /**
   * getCourseById - Get course by identifier
   */
  'getCourseById'(
    parameters?: Parameters<Paths.GetCourseById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetCourseById.Responses.$200>;
  /**
   * getCourses - Get all courses
   */
  'getCourses'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetCourses.Responses.$200>;
  /**
   * createOrUpdateCourses - Create new courses or update existing courses
   *
   * Update courses when id are provided, create them otherwise.
   */
  'createOrUpdateCourses'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateOrUpdateCourses.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.CreateOrUpdateCourses.Responses.$200>;
  /**
   * getTeacherById - Get teacher by identifier
   */
  'getTeacherById'(
    parameters?: Parameters<Paths.GetTeacherById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetTeacherById.Responses.$200>;
  /**
   * getTeachers - Get all teachers
   */
  'getTeachers'(
    parameters?: Parameters<Paths.GetTeachers.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetTeachers.Responses.$200>;
  /**
   * createOrUpdateTeachers - Create new teachers or update existing teachers
   *
   * Update teachers when `id` are provided, create them otherwise.
   */
  'createOrUpdateTeachers'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateOrUpdateTeachers.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.CreateOrUpdateTeachers.Responses.$200>;
  /**
   * getManagerById - Get manager by identifier
   */
  'getManagerById'(
    parameters?: Parameters<Paths.GetManagerById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetManagerById.Responses.$200>;
  /**
   * getManagers - Get all managers
   */
  'getManagers'(
    parameters?: Parameters<Paths.GetManagers.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetManagers.Responses.$200>;
  /**
   * createDelayPenaltyChange - Change current delay penalty configuration
   */
  'createDelayPenaltyChange'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateDelayPenaltyChange.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.CreateDelayPenaltyChange.Responses.$200>;
  /**
   * getDelayPenalty - Get current delay penalty
   */
  'getDelayPenalty'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetDelayPenalty.Responses.$200>;
  /**
   * getStudentFeeById - Get student fee by identifier
   */
  'getStudentFeeById'(
    parameters?: Parameters<Paths.GetStudentFeeById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetStudentFeeById.Responses.$200>;
  /**
   * getStudentFees - Get all student fees ordered by due datetime desc
   *
   * Fees can be filtered with an optional payment status parameter.
   */
  'getStudentFees'(
    parameters?: Parameters<
      Paths.GetStudentFees.PathParameters & Paths.GetStudentFees.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetStudentFees.Responses.$200>;
  /**
   * createStudentFees - Create student fees
   */
  'createStudentFees'(
    parameters?: Parameters<Paths.CreateStudentFees.PathParameters> | null,
    data?: Paths.CreateStudentFees.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.CreateStudentFees.Responses.$200>;
  /**
   * getFees - Get all student fees filtered by status
   */
  'getFees'(
    parameters?: Parameters<Paths.GetFees.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetFees.Responses.$200>;
  /**
   * getStudentPayments - Get all student payments of a specific fee. Resulting list is ordered by creation datetime desc.
   */
  'getStudentPayments'(
    parameters?: Parameters<
      Paths.GetStudentPayments.PathParameters & Paths.GetStudentPayments.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetStudentPayments.Responses.$200>;
  /**
   * createStudentPayments - Create student payments
   */
  'createStudentPayments'(
    parameters?: Parameters<Paths.CreateStudentPayments.PathParameters> | null,
    data?: Paths.CreateStudentPayments.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.CreateStudentPayments.Responses.$200>;
}

export interface PathsDictionary {
  ['/whoami']: {
    /**
     * whoami - Who am I? Tells you who you are.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.Whoami.Responses.$200>;
  };
  ['/ping']: {
    /**
     * ping - pong
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.Ping.Responses.$200>;
  };
  ['/groups/{id}']: {
    /**
     * getGroupById - Get group by identifier
     */
    'get'(
      parameters?: Parameters<Paths.GetGroupById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetGroupById.Responses.$200>;
  };
  ['/groups']: {
    /**
     * getGroups - Get all groups
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetGroups.Responses.$200>;
    /**
     * createOrUpdateGroups - Create new groups or update existing groups
     *
     * Update groups when `id` are provided, create them otherwise.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateOrUpdateGroups.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreateOrUpdateGroups.Responses.$200>;
  };
  ['/students/{id}']: {
    /**
     * getStudentById - Get student by identifier
     */
    'get'(
      parameters?: Parameters<Paths.GetStudentById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetStudentById.Responses.$200>;
  };
  ['/students']: {
    /**
     * getStudents - Get all students
     */
    'get'(
      parameters?: Parameters<Paths.GetStudents.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetStudents.Responses.$200>;
    /**
     * createOrUpdateStudents - Create new students or update existing students
     *
     * Update students when `id` are provided, create them otherwise.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateOrUpdateStudents.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreateOrUpdateStudents.Responses.$200>;
  };
  ['/courses/{id}']: {
    /**
     * getCourseById - Get course by identifier
     */
    'get'(
      parameters?: Parameters<Paths.GetCourseById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetCourseById.Responses.$200>;
  };
  ['/courses']: {
    /**
     * getCourses - Get all courses
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetCourses.Responses.$200>;
    /**
     * createOrUpdateCourses - Create new courses or update existing courses
     *
     * Update courses when id are provided, create them otherwise.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateOrUpdateCourses.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreateOrUpdateCourses.Responses.$200>;
  };
  ['/teachers/{id}']: {
    /**
     * getTeacherById - Get teacher by identifier
     */
    'get'(
      parameters?: Parameters<Paths.GetTeacherById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetTeacherById.Responses.$200>;
  };
  ['/teachers']: {
    /**
     * getTeachers - Get all teachers
     */
    'get'(
      parameters?: Parameters<Paths.GetTeachers.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetTeachers.Responses.$200>;
    /**
     * createOrUpdateTeachers - Create new teachers or update existing teachers
     *
     * Update teachers when `id` are provided, create them otherwise.
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateOrUpdateTeachers.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreateOrUpdateTeachers.Responses.$200>;
  };
  ['/managers/{id}']: {
    /**
     * getManagerById - Get manager by identifier
     */
    'get'(
      parameters?: Parameters<Paths.GetManagerById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetManagerById.Responses.$200>;
  };
  ['/managers']: {
    /**
     * getManagers - Get all managers
     */
    'get'(
      parameters?: Parameters<Paths.GetManagers.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetManagers.Responses.$200>;
  };
  ['/delay_penalty_change']: {
    /**
     * createDelayPenaltyChange - Change current delay penalty configuration
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateDelayPenaltyChange.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreateDelayPenaltyChange.Responses.$200>;
  };
  ['/delay_penalty']: {
    /**
     * getDelayPenalty - Get current delay penalty
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetDelayPenalty.Responses.$200>;
  };
  ['/students/{student_id}/fees/{fee_id}']: {
    /**
     * getStudentFeeById - Get student fee by identifier
     */
    'get'(
      parameters?: Parameters<Paths.GetStudentFeeById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetStudentFeeById.Responses.$200>;
  };
  ['/students/{student_id}/fees']: {
    /**
     * getStudentFees - Get all student fees ordered by due datetime desc
     *
     * Fees can be filtered with an optional payment status parameter.
     */
    'get'(
      parameters?: Parameters<
        Paths.GetStudentFees.PathParameters & Paths.GetStudentFees.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetStudentFees.Responses.$200>;
    /**
     * createStudentFees - Create student fees
     */
    'post'(
      parameters?: Parameters<Paths.CreateStudentFees.PathParameters> | null,
      data?: Paths.CreateStudentFees.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreateStudentFees.Responses.$200>;
  };
  ['/fees']: {
    /**
     * getFees - Get all student fees filtered by status
     */
    'get'(
      parameters?: Parameters<Paths.GetFees.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetFees.Responses.$200>;
  };
  ['/students/{student_id}/fees/{fee_id}/payments']: {
    /**
     * getStudentPayments - Get all student payments of a specific fee. Resulting list is ordered by creation datetime desc.
     */
    'get'(
      parameters?: Parameters<
        Paths.GetStudentPayments.PathParameters & Paths.GetStudentPayments.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetStudentPayments.Responses.$200>;
    /**
     * createStudentPayments - Create student payments
     */
    'post'(
      parameters?: Parameters<Paths.CreateStudentPayments.PathParameters> | null,
      data?: Paths.CreateStudentPayments.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreateStudentPayments.Responses.$200>;
  };
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>;
