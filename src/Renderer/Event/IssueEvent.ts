import {Event} from './Event';

enum EventNames {
  SelectIssue = 'SelectIssue',
  FocusIssue = 'FocusIssue',
  ReadIssue = 'ReadIssue',
  MarkIssue = 'MarkIssue',
  ArchiveIssue = 'ArchiveIssue',
  ReadAllIssues = 'ReadAllIssues',
  ReadAllIssuesFromLibrary = 'ReadAllIssuesFromLibrary',
  ReadIssues = 'ReadIssues',
}

class _IssueEmitter {
  private readonly event = new Event();

  offAll(owner) {
    this.event.offAll(owner);
  }

  // select issue
  emitSelectIssue(issue, readBody) {
    this.event.emit(EventNames.SelectIssue, issue, readBody);
  }

  onSelectIssue(owner, handler) {
    return this.event.on(EventNames.SelectIssue, owner, handler);
  }

  // focus issue
  emitFocusIssue(issue) {
    this.event.emit(EventNames.FocusIssue, issue);
  }

  onFocusIssue(owner, handler) {
    return this.event.on(EventNames.FocusIssue, owner, handler);
  }

  // read issue
  emitReadIssue(issue) {
    this.event.emit(EventNames.ReadIssue, issue);
  }

  onReadIssue(owner, handler) {
    return this.event.on(EventNames.ReadIssue, owner, handler);
  }

  // mark issue
  emitMarkIssue(issue) {
    this.event.emit(EventNames.MarkIssue, issue);
  }

  onMarkIssue(owner, handler) {
    return this.event.on(EventNames.MarkIssue, owner, handler);
  }

  // archive issue
  emitArchiveIssue(issue) {
    this.event.emit(EventNames.ArchiveIssue, issue);
  }

  addArchiveIssueListener(owner, handler) {
    return this.event.on(EventNames.ArchiveIssue, owner, handler);
  }

  // read all
  emitReadAllIssues(streamId) {
    this.event.emit(EventNames.ReadAllIssues, streamId);
  }

  onReadAllIssues(owner, handler) {
    return this.event.on(EventNames.ReadAllIssues, owner, handler);
  }

  // read all from library
  emitReadAllIssuesFromLibrary(streamName) {
    this.event.emit(EventNames.ReadAllIssuesFromLibrary, streamName);
  }

  onReadAllIssuesFromLibrary(owner, handler) {
    return this.event.on(EventNames.ReadAllIssuesFromLibrary, owner, handler);
  }

  // read issues
  emitReadIssues(issueIds) {
    this.event.emit(EventNames.ReadIssues, issueIds);
  }

  onReadIssues(owner, handler) {
    return this.event.on(EventNames.ReadIssues, owner, handler);
  }
}

export const IssueEvent = new _IssueEmitter();
