import { Component } from '@angular/core';

@Component({
  selector: 'app-call-list',
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.css']
})
export class CallListComponent {


  isLoading: boolean = false;
  filterStatus: string = "new"; // default filter

  selectedOrder: any; // Pour stocker l'ordre sélectionné
  reason: string = ""; // Pour stocker la raison sélectionnée

  // Pagination variables
  currentPage: number = 1;
  totalPages: number = 1;
  perPage: number = 5;


  loadOrders(page: number = 1, status: string = this.filterStatus): void {
    this.isLoading = true;
    
      
  }

  filterByNewOrders(): void {
    this.filterStatus = "new";
    this.loadOrders(1, this.filterStatus);
  }

  filterByReportedOrders(): void {
    this.filterStatus = "postpone";
    this.loadOrders(1, this.filterStatus);
  }

  filterByCancelledOrders(): void {
    this.filterStatus = "canceled_by_admin";
    this.loadOrders(1, this.filterStatus);
  }

  // Pagination method
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.loadOrders(page);
    }
  }

  changeOrderStatus(orderId: number, newStatus: string, reason?: string): void {
    if (newStatus === "canceled_by_admin" && !reason) {
      alert("Veuillez fournir un motif d'annulation.");
      return;
    }
    this.isLoading = true;
    // Construire l'URL en fonction du statut et de la présence d'une raison

   
  }

  // Soumettre l'annulation (utilise la fonction générique)
  submitCancellation(): void {
    if (!this.reason) {
      alert("Veuillez sélectionner un motif.");
      return;
    }
    this.changeOrderStatus(
      this.selectedOrder.id,
      "canceled_by_admin",
      this.reason
    );
  }
  // Sélectionner l'ordre pour l'annulation
  selectOrderForCancellation(order: any): void {
    this.selectedOrder = order;
    this.reason = ""; // Réinitialiser le motif
  }

  // Sélectionner un motif
  selectReason(selectedReason: string): void {
    this.reason = selectedReason;
  }
}
