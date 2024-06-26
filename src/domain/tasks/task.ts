import { Comment } from "../comment/comment";
import { UserStory } from "../user-story/user-story";
import { User } from "../users/user";

export class Task {
  id: number;
  externalId: number;
  areaPath: string;
  teamProject: string;
  iterationPath: string;
  workItemType: string;
  state: string;
  reason: string;
  assignedTo: User;
  title: string;
  remainingWork: number;
  originalEstimate: number;
  completedWork: number;
  activity: string;
  priority: number;
  description: string;
  tags: string;
  userStoryParent: UserStory;
  url: string;
  comments: Comment[];
  pageUrl: string;

  constructor(
    id: number,
    areaPath: string,
    teamProject: string,
    iterationPath: string,
    workItemType: string,
    state: string,
    reason: string,
    assignedTo: User,
    title: string,
    remainingWork: number,
    originalEstimate: number,
    completedWork: number,
    activity: string,
    priority: number,
    description: string,
    tags: string,
    userStoryParent: UserStory,
    url: string,
    comments: Comment[],
    pageUrl: string,
    externalId: number
  ) {
    this.id = id;
    this.areaPath = areaPath;
    this.teamProject = teamProject;
    this.iterationPath = iterationPath;
    this.workItemType = workItemType;
    this.state = state;
    this.reason = reason;
    this.assignedTo = assignedTo;
    this.title = title;
    this.remainingWork = remainingWork;
    this.originalEstimate = originalEstimate;
    this.completedWork = completedWork;
    this.activity = activity;
    this.priority = priority;
    this.description = description;
    this.tags = tags;
    this.userStoryParent = userStoryParent;
    this.url = url;
    this.comments = comments;
    this.pageUrl = pageUrl;
    this.externalId = externalId;
  }
}