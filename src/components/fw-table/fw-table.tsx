import { Component, Element, State, Prop, Method, h } from '@stencil/core';
import datatables from "datatables.net-dt";
import $ from "jquery";
@Component({
  tag: 'fw-table',
  styleUrl: 'fw-table.css',
  assetsDir: 'assets',
  shadow: false
})
export class FwTable {
  children: Element[];

  @Element() host: HTMLDivElement;

  @State() isInitialized: boolean = false;

  componentDidLoad(ev: Event) {
    if (!this.isInitialized) {
      new datatables().Api($("table"));
      $("table").DataTable({
        "bFilter": true,
        paging: true,
        "bPaginate": false,
        "bLengthChange": false,
        "bInfo": false,
        "bAutoWidth": false
      });
      this.isInitialized = true;
    }
  }

  render() {
    return <div class="input">
      <div class="input-wrapper">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>IsD</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Tom</td>
              <td>example@example.com</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jim</td>
              <td>example@example.com</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>;
  }
}
