import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TopicService} from './TopicService';
import {Topic} from './Topic';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

    topics: Topic[];
    pwds = [];
    message = '';
    constructor(private router: Router, private topicService: TopicService) { }
    topicRecord = {
      'name': '',
      'email': '',
  };
    ngOnInit() {
        this.getAllTopics();
        this.router.navigate(['topics']);
    }

    getAllTopics() {
        this.topicService.findAll().subscribe(
            topics => {
                this.topics = topics;
            },
            err => {
                console.log(err);
            }
        );
    }

   /* redirectNewUserPage() {
        this.router.navigate(['/create']);
    }*/
    editTopic(topic: Topic) {
        if (topic) {
            this.router.navigate(['/topic/edit', topic.eid]);
        }
    }


    deleteTopic(topic: Topic) {
        if (topic) {
            this.topicService.deleteTopicById(topic.eid).subscribe(
                res => {
                    this.getAllTopics();
                    this.router.navigate(['/topics']);
                    console.log('done');
                }
            );
        }
    }

  getPassword(){
    this.topicService.getPassword()
      .subscribe(
        data => this.pwds = data,
        error => this.message = error,
      );
  }

  getTopic(event) {
    const topic = this.topics.find(el => el['eid'] === +event.target.value);
    this.topicRecord = topic;
  }

  p : number = 1;
  key : string = 'name';
  reverse : boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = this.reverse;
  }
}
