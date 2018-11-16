import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Task} from "../../models/task";
import {TaskProvider} from "../../providers/task/task";
import * as _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController,
              private taskProvider: TaskProvider) {

  }

  ngOnInit() {
    /**
     * Au chargement de mon application,
     * je récupère lrd tâches sauvegardées.
     **/
    this.taskProvider.get().then(
      tasks => {
        /**
         * J'affecte les données du storage
         * à mon tableau de tâches UNIQUEMENT
         * s'il y a des données.
         **/
        if (null !== tasks){
          this.tasks = tasks;
        }
      }
    )
  }

  /** Création d'une tâche*/
  task: Task = new Task();

  /** Affichage du formulaire */
  active: boolean = true;

  date: Date = new Date();

  /** Liste de Tâches */
  tasks: Task[] = [];

  /**
   * Déclanche l'enrégistrement
   * d'une nouvelle tâche.
   **/
  saveTask() {
    /**
     * Je m'assure que l'utilisateur a bien saisi
     * un titre pour la tâche.
     **/
    if (undefined !== this.task.title && this.task.title.length > 0) {

      // -- Attribuer un ID
      this.task.id = Date.now();

      // -- On push la "task" dans "tasks"
      this.tasks.push(this.task);

      // -- J'enrégistre les tâches dans le storage.
      this.taskProvider.save(this.tasks);
    }// endif

    // -- réinitialisation des données
    this.task = new Task();
    this.active = false;// -- fais disparaitre le champ
    setTimeout(() => this.active = true, 0);

  }

  /**
   * Elle déclanche l'enrégistrement
   * lors de la pressionsur 'enter'
   **/
  onKeyPress(key: string): void {
    if (key === "Enter") {
      this.saveTask();
    }
  }
  /**
   * On enclanche la sauvegarde
   * des tâches de l'application
   **/
  saveOurTasks() {
    this.taskProvider.save(this.tasks);
  }

  /**
   * Supprimer une tâche
   **/
  deleteTask(task: Task): void {
    _.pullAllWith(this.tasks, [task], _.isEqual);
    this.saveOurTasks();
  }
}

