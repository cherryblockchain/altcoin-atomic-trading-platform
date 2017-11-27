import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule, MatProgressSpinnerModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {ShapeShiftCommonModule} from "../common/common.module";
import {ProgressBarComponent} from "../components/progress-bar/progress-bar.component";
import {SwapIconComponent} from "../components/swap-icon/swap-icon.component";
import {SwapInitiatePreviewModule} from "../components/swap-initiate-preview/swap-initiate-preview.module";
import {SwapInitiatedModule} from "../components/swap-initiated/swap-initiated.module";
import {SwapInputsModule} from "../components/swap-inputs/swap-inputs.module";
import {QrCodeComponent} from "./qr-code/qr-code.component";
import {SideAContainerComponent} from "./side-a-container/side-a.component";
import {SideBContainerComponent} from "./side-b-container/side-b.component";
import {SwapCompleteComponent} from "./swap-complete/swap-complete.component";
import {SwapContainerComponent} from "./swap-container/swap-container.component";
import {SwapInitiateComponent} from "./swap-initiate/swap-initiate.component";
import {SwapParticipateComponent} from "./swap-participate/swap-participate.component";
import {SwapStartComponent} from "./swap-start/swap-start.component";
import {TransferLinkComponent} from "./transfer-link/transfer-link.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "", component: SwapContainerComponent, children: [
        {path: "", redirectTo: "swap", pathMatch: "full"},
        {path: "swap", component: SwapStartComponent},
        {path: "insufficient-amount", component: QrCodeComponent},
        {path: "transfer", component: TransferLinkComponent},
        {path: "a/complete", component: SideAContainerComponent},
        {path: "b/complete", component: SideBContainerComponent},
        {path: "initiate/:link", component: SwapInitiateComponent},
        {path: "participate/:link", component: SwapParticipateComponent},
      ],
      },
    ]),
    ShapeShiftCommonModule,
    FlexLayoutModule,
    SwapInputsModule,
    SwapInitiatedModule,
    SwapInitiatePreviewModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  declarations: [
    SwapIconComponent,
    QrCodeComponent,
    SwapContainerComponent,
    SwapStartComponent,
    TransferLinkComponent,
    SwapInitiateComponent,
    ProgressBarComponent,
    SwapParticipateComponent,
    SwapCompleteComponent,
    SideAContainerComponent,
    SideBContainerComponent,
  ],
})
export class SwapModule {
}
