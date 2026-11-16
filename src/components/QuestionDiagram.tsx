import React, { useState, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, X } from 'lucide-react';
import { DiagramPrism } from './DiagramPrism';
import { DiagramTriangleSecret } from './DiagramTriangleSecret';
import { DiagramCoordinateOxyz, DiagramFunctionGraph } from './DiagramCoordinateOxyz';
import { DiagramPyramidSABCD, DiagramPyramidSABC } from './DiagramPyramidSABCD';
import { DiagramExam39DerivativeGraph } from './DiagramExam39DerivativeGraph';
import { DiagramExam39CubePyramid } from './DiagramExam39CubePyramid';
import { DiagramExam39StandModel } from './DiagramExam39StandModel';
import { DiagramExam39SquareQuarterCircle } from './DiagramExam39SquareQuarterCircle';
import { DiagramExam39FrustumPyramid } from './DiagramExam39FrustumPyramid';
import { DiagramExam39VariationTable } from './DiagramExam39VariationTable';
import {
  DiagramDe01CubeABCD,
  DiagramDe01TableStats,
  DiagramDe01PyramidVABC,
  DiagramDe01GraphP1Q12,
  DiagramDe01GraphP2Q1,
  DiagramDe01Grid3x3,
  DiagramDe01TetrahedronABCD,
} from './DiagramDe01';
import {
  DiagramDe02BBTP1Q1,
  DiagramDe02GraphP1Q2,
  DiagramDe02BBTP1Q5,
  DiagramDe02BBTP1Q9,
  DiagramDe02BoxP1Q10,
  DiagramDe02GraphP2Q1,
  DiagramDe02GridP2Q3,
  DiagramDe02PrismP2Q4,
  DiagramDe02BasketballP3Q1,
} from './DiagramDe02';
import {
  DiagramDe03GraphP1Q4,
  DiagramDe03GraphP1Q8,
  DiagramDe03TableP1Q9,
  DiagramDe03BBTP2Q1,
  DiagramDe03TableP2Q3,
  DiagramDe03TetrahedronP3Q4,
} from './DiagramDe03';
import {
  DiagramDe04GraphP1Q3,
  DiagramDe04BBTP1Q4,
  DiagramDe04GraphP1Q5,
  DiagramDe04GraphP2Q3,
  DiagramDe04PrismP3Q4,
  DiagramDe04HexagonP3Q5,
  DiagramDe04HexagonNetP3Q6,
} from './DiagramDe04';
import {
  DiagramDe05PyramidP1Q6,
  DiagramDe05GraphP1Q7,
  DiagramDe05TableP1Q9,
  DiagramDe05FoldP2Q4,
  DiagramDe05CardsP3Q6,
} from './DiagramDe05';
import {
  DiagramDe06GraphP1Q2,
  DiagramDe06GridP1Q3,
  DiagramDe06TableP1Q5,
  DiagramDe06CircuitP1Q6,
  DiagramDe06BBTP1Q7,
  DiagramDe06GraphP1Q9,
  DiagramDe06GraphP1Q11,
  DiagramDe06BoxP1Q12,
  DiagramDe06HopscotchP2Q3,
  DiagramDe06ParallelepipedP2Q4,
  DiagramDe06CylinderP3Q1,
  DiagramDe06LanternsP3Q6,
} from './DiagramDe06';
import {
  DiagramDe07GraphP1Q1,
  DiagramDe07GraphP1Q4,
  DiagramDe07PrismP1Q6,
  DiagramDe07CubeP1Q10,
  DiagramDe07GraphP1Q12,
  DiagramDe07BBTP2Q2,
  DiagramDe07ParallelepipedP2Q3,
  DiagramDe07ParallelepipedP3Q1,
  DiagramDe07FrustumP3Q4,
  DiagramDe07FerrisP3Q5,
} from './DiagramDe07';
import {
  DiagramDe08GraphP1Q1,
  DiagramDe08SignTableP1Q2,
  DiagramDe08AmoebaP1Q4,
  DiagramDe08GraphsP1Q5,
  DiagramDe08GridLinesP1Q8,
  DiagramDe08RectangleP1Q10,
  DiagramDe08TetrahedronP1Q11,
  DiagramDe08PyramidP2Q2,
  DiagramDe08TriangleRectP3Q1,
  DiagramDe08CubePlaneP3Q2,
  DiagramDe08TangramP3Q6,
} from './DiagramDe08';
import {
  DiagramDe09BBTP1Q1,
  DiagramDe09GraphP1Q2,
  DiagramDe09GraphP1Q3,
  DiagramDe09FrustumP1Q7,
  DiagramDe09GraphP1Q9,
  DiagramDe09GraphsP1Q12,
  DiagramDe09GridAntP3Q1,
  DiagramDe09PyramidNetP3Q3,
  DiagramDe09GutterP3Q4,
} from './DiagramDe09';
import {
  DiagramDe10BBTP1Q1,
  DiagramDe10TableP1Q6,
  DiagramDe10ParallelepipedP1Q11,
  DiagramDe10GraphP2Q3,
  DiagramDe10PrismP3Q2,
  DiagramDe10BoxShadowP3Q6,
} from './DiagramDe10';
import {
  DiagramDe11SignTableP1Q2,
  DiagramDe11TableP1Q7,
  DiagramDe11SpinningTopP1Q10,
  DiagramDe11PlotsP1Q11,
  DiagramDe11GraphP2Q1,
  DiagramDe11WarehouseP2Q3,
  DiagramDe11TableP2Q4,
  DiagramDe11ConesP3Q2,
  DiagramDe11BoatCurveP3Q6,
} from './DiagramDe11';
import {
  DiagramDe12TableP1Q3,
  DiagramDe12BBTP1Q7,
  DiagramDe12GraphP1Q10,
  DiagramDe12TetrahedronP1Q12,
  DiagramDe12TableP2Q2,
  DiagramDe12PyramidP2Q4,
  DiagramDe12CubesP3Q3,
  DiagramDe12SquareP3Q4,
} from './DiagramDe12';
import {
  DiagramDe13TableP1Q2,
  DiagramDe13GraphP1Q3,
  DiagramDe13BBTP1Q11,
  DiagramDe13RocketP2Q1,
  DiagramDe13GraphP2Q2,
  DiagramDe13TableP2Q4,
  DiagramDe13CurveP3Q5,
  DiagramDe13HexagonP3Q6,
} from './DiagramDe13';
import {
  DiagramDe14GraphP1Q1,
  DiagramDe14BoxP1Q2,
  DiagramDe14TableP1Q3,
  DiagramDe14GraphP1Q4,
  DiagramDe14TableP1Q7,
  DiagramDe14TableP2Q1,
  DiagramDe14BoxP2Q2,
  DiagramDe14GraphP2Q3,
  DiagramDe14SpheresP3Q1,
  DiagramDe14TetrahedronP3Q2,
  DiagramDe14BeadsP3Q4,
  DiagramDe14CircleRulerP3Q6,
} from './DiagramDe14';
import {
  DiagramDe15TableP1Q4,
  DiagramDe15BoxP1Q5,
  DiagramDe15BBTP1Q7,
  DiagramDe15ParallelepipedP1Q10,
  DiagramDe15GraphP1Q11,
  DiagramDe15GraphP2Q1,
  DiagramDe15GraphP2Q2,
  DiagramDe15TableP2Q3,
  DiagramDe15ConesP3Q1,
  DiagramDe15CardsP3Q3,
  DiagramDe15CirclesP3Q4,
  DiagramDe15CubicCircleP3Q5,
  DiagramDe15MachineP3Q6,
} from './DiagramDe15';

interface QuestionDiagramProps {
  type?: string;
  imageUrl?: string;
}

export const QuestionDiagram: React.FC<QuestionDiagramProps> = ({ type, imageUrl }) => {
  const [imageError, setImageError] = useState(false);
  const [scale, setScale] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Determine if valid image source exists
  let validSrc: string | null = null;
  const candidate = imageUrl || type;

  if (candidate) {
    const trimmed = candidate.trim();
    if (
      trimmed.startsWith('data:image/') ||
      trimmed.startsWith('http://') ||
      trimmed.startsWith('https://') ||
      trimmed.startsWith('blob:')
    ) {
      validSrc = trimmed;
    }
  }

  // Reset error & zoom state when question diagram changes
  useEffect(() => {
    setImageError(false);
    setScale(1);
    setIsFullscreen(false);
  }, [validSrc, type, imageUrl]);

  const handleZoomOut = () => setScale((s) => Math.max(0.75, Number((s - 0.25).toFixed(2))));
  const handleZoomIn = () => setScale((s) => Math.min(2.5, Number((s + 0.25).toFixed(2))));
  const handleResetZoom = () => setScale(1);

  const renderDiagramContent = () => {
    if (validSrc && !imageError) {
      return (
        <img
          src={validSrc}
          alt="Hình minh họa"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="max-w-full max-h-[240px] sm:max-h-[320px] object-contain rounded-lg mx-auto"
        />
      );
    }

    if (!type) return null;

    if (type.trim().startsWith('<svg') && type.trim().endsWith('</svg>')) {
      return (
        <div
          className="max-w-full overflow-x-auto text-slate-900 flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: type }}
        />
      );
    }

    const normalized = type.toUpperCase().trim();
    switch (normalized) {
      case 'DE01_CUBE_ABCD':
        return <DiagramDe01CubeABCD />;
      case 'DE01_TABLE_STATS':
        return <DiagramDe01TableStats />;
      case 'DE01_PYRAMID_VABC':
        return <DiagramDe01PyramidVABC />;
      case 'DE01_GRAPH_P1_Q12':
        return <DiagramDe01GraphP1Q12 />;
      case 'DE01_GRAPH_P2_Q1':
        return <DiagramDe01GraphP2Q1 />;
      case 'DE01_GRID_3X3':
        return <DiagramDe01Grid3x3 />;
      case 'DE01_TETRAHEDRON_ABCD':
        return <DiagramDe01TetrahedronABCD />;
      case 'DE02_BBT_P1_Q1':
        return <DiagramDe02BBTP1Q1 />;
      case 'DE02_GRAPH_P1_Q2':
        return <DiagramDe02GraphP1Q2 />;
      case 'DE02_BBT_P1_Q5':
        return <DiagramDe02BBTP1Q5 />;
      case 'DE02_BBT_P1_Q9':
        return <DiagramDe02BBTP1Q9 />;
      case 'DE02_BOX_P1_Q10':
        return <DiagramDe02BoxP1Q10 />;
      case 'DE02_GRAPH_P2_Q1':
        return <DiagramDe02GraphP2Q1 />;
      case 'DE02_GRID_P2_Q3':
        return <DiagramDe02GridP2Q3 />;
      case 'DE02_PRISM_P2_Q4':
        return <DiagramDe02PrismP2Q4 />;
      case 'DE02_BASKETBALL_P3_Q1':
        return <DiagramDe02BasketballP3Q1 />;
      case 'DE03_GRAPH_P1_Q4':
        return <DiagramDe03GraphP1Q4 />;
      case 'DE03_GRAPH_P1_Q8':
        return <DiagramDe03GraphP1Q8 />;
      case 'DE03_TABLE_P1_Q9':
        return <DiagramDe03TableP1Q9 />;
      case 'DE03_BBT_P2_Q1':
        return <DiagramDe03BBTP2Q1 />;
      case 'DE03_TABLE_P2_Q3':
        return <DiagramDe03TableP2Q3 />;
      case 'DE03_TETRAHEDRON_P3_Q4':
        return <DiagramDe03TetrahedronP3Q4 />;
      case 'DE04_GRAPH_P1_Q3':
        return <DiagramDe04GraphP1Q3 />;
      case 'DE04_BBT_P1_Q4':
        return <DiagramDe04BBTP1Q4 />;
      case 'DE04_GRAPH_P1_Q5':
        return <DiagramDe04GraphP1Q5 />;
      case 'DE04_GRAPH_P2_Q3':
        return <DiagramDe04GraphP2Q3 />;
      case 'DE04_PRISM_P3_Q4':
        return <DiagramDe04PrismP3Q4 />;
      case 'DE04_HEXAGON_P3_Q5':
        return <DiagramDe04HexagonP3Q5 />;
      case 'DE04_HEXAGON_NET_P3_Q6':
        return <DiagramDe04HexagonNetP3Q6 />;
      case 'DE05_PYRAMID_P1_Q6':
        return <DiagramDe05PyramidP1Q6 />;
      case 'DE05_GRAPH_P1_Q7':
        return <DiagramDe05GraphP1Q7 />;
      case 'DE05_TABLE_P1_Q9':
        return <DiagramDe05TableP1Q9 />;
      case 'DE05_FOLD_P2_Q4':
        return <DiagramDe05FoldP2Q4 />;
      case 'DE05_CARDS_P3_Q6':
        return <DiagramDe05CardsP3Q6 />;
      case 'DE06_GRAPH_P1_Q2':
        return <DiagramDe06GraphP1Q2 />;
      case 'DE06_GRID_P1_Q3':
        return <DiagramDe06GridP1Q3 />;
      case 'DE06_TABLE_P1_Q5':
        return <DiagramDe06TableP1Q5 />;
      case 'DE06_CIRCUIT_P1_Q6':
        return <DiagramDe06CircuitP1Q6 />;
      case 'DE06_BBT_P1_Q7':
        return <DiagramDe06BBTP1Q7 />;
      case 'DE06_GRAPH_P1_Q9':
        return <DiagramDe06GraphP1Q9 />;
      case 'DE06_GRAPH_P1_Q11':
        return <DiagramDe06GraphP1Q11 />;
      case 'DE06_BOX_P1_Q12':
        return <DiagramDe06BoxP1Q12 />;
      case 'DE06_HOPSCOTCH_P2_Q3':
        return <DiagramDe06HopscotchP2Q3 />;
      case 'DE06_PARALLELEPIPED_P2_Q4':
        return <DiagramDe06ParallelepipedP2Q4 />;
      case 'DE06_CYLINDER_P3_Q1':
        return <DiagramDe06CylinderP3Q1 />;
      case 'DE06_LANTERNS_P3_Q6':
        return <DiagramDe06LanternsP3Q6 />;
      case 'DE07_GRAPH_P1_Q1':
        return <DiagramDe07GraphP1Q1 />;
      case 'DE07_GRAPH_P1_Q4':
        return <DiagramDe07GraphP1Q4 />;
      case 'DE07_PRISM_P1_Q6':
        return <DiagramDe07PrismP1Q6 />;
      case 'DE07_CUBE_P1_Q10':
        return <DiagramDe07CubeP1Q10 />;
      case 'DE07_GRAPH_P1_Q12':
        return <DiagramDe07GraphP1Q12 />;
      case 'DE07_BBT_P2_Q2':
        return <DiagramDe07BBTP2Q2 />;
      case 'DE07_PARALLELEPIPED_P2_Q3':
        return <DiagramDe07ParallelepipedP2Q3 />;
      case 'DE07_PARALLELEPIPED_P3_Q1':
        return <DiagramDe07ParallelepipedP3Q1 />;
      case 'DE07_FRUSTUM_P3_Q4':
        return <DiagramDe07FrustumP3Q4 />;
      case 'DE07_FERRIS_P3_Q5':
        return <DiagramDe07FerrisP3Q5 />;
      case 'DE08_GRAPH_P1_Q1':
        return <DiagramDe08GraphP1Q1 />;
      case 'DE08_SIGN_TABLE_P1_Q2':
        return <DiagramDe08SignTableP1Q2 />;
      case 'DE08_AMOEBA_P1_Q4':
        return <DiagramDe08AmoebaP1Q4 />;
      case 'DE08_GRAPHS_P1_Q5':
        return <DiagramDe08GraphsP1Q5 />;
      case 'DE08_GRID_LINES_P1_Q8':
        return <DiagramDe08GridLinesP1Q8 />;
      case 'DE08_RECTANGLE_P1_Q10':
        return <DiagramDe08RectangleP1Q10 />;
      case 'DE08_TETRAHEDRON_P1_Q11':
        return <DiagramDe08TetrahedronP1Q11 />;
      case 'DE08_PYRAMID_P2_Q2':
        return <DiagramDe08PyramidP2Q2 />;
      case 'DE08_TRIANGLE_RECT_P3_Q1':
        return <DiagramDe08TriangleRectP3Q1 />;
      case 'DE08_CUBE_PLANE_P3_Q2':
        return <DiagramDe08CubePlaneP3Q2 />;
      case 'DE08_TANGRAM_P3_Q6':
        return <DiagramDe08TangramP3Q6 />;
      case 'DE09_BBT_P1_Q1':
        return <DiagramDe09BBTP1Q1 />;
      case 'DE09_GRAPH_P1_Q2':
        return <DiagramDe09GraphP1Q2 />;
      case 'DE09_GRAPH_P1_Q3':
        return <DiagramDe09GraphP1Q3 />;
      case 'DE09_FRUSTUM_P1_Q7':
        return <DiagramDe09FrustumP1Q7 />;
      case 'DE09_GRAPH_P1_Q9':
        return <DiagramDe09GraphP1Q9 />;
      case 'DE09_GRAPHS_P1_Q12':
        return <DiagramDe09GraphsP1Q12 />;
      case 'DE09_GRID_ANT_P3_Q1':
        return <DiagramDe09GridAntP3Q1 />;
      case 'DE09_PYRAMID_NET_P3_Q3':
        return <DiagramDe09PyramidNetP3Q3 />;
      case 'DE09_GUTTER_P3_Q4':
        return <DiagramDe09GutterP3Q4 />;
      case 'DE10_BBT_P1_Q1':
        return <DiagramDe10BBTP1Q1 />;
      case 'DE10_TABLE_P1_Q6':
        return <DiagramDe10TableP1Q6 />;
      case 'DE10_PARALLELEPIPED_P1_Q11':
        return <DiagramDe10ParallelepipedP1Q11 />;
      case 'DE10_GRAPH_P2_Q3':
        return <DiagramDe10GraphP2Q3 />;
      case 'DE10_PRISM_P3_Q2':
        return <DiagramDe10PrismP3Q2 />;
      case 'DE10_BOX_SHADOW_P3_Q6':
        return <DiagramDe10BoxShadowP3Q6 />;
      case 'DE11_SIGN_TABLE_P1_Q2':
        return <DiagramDe11SignTableP1Q2 />;
      case 'DE11_TABLE_P1_Q7':
        return <DiagramDe11TableP1Q7 />;
      case 'DE11_SPINNING_TOP_P1_Q10':
        return <DiagramDe11SpinningTopP1Q10 />;
      case 'DE11_PLOTS_P1_Q11':
        return <DiagramDe11PlotsP1Q11 />;
      case 'DE11_GRAPH_P2_Q1':
        return <DiagramDe11GraphP2Q1 />;
      case 'DE11_WAREHOUSE_P2_Q3':
        return <DiagramDe11WarehouseP2Q3 />;
      case 'DE11_TABLE_P2_Q4':
        return <DiagramDe11TableP2Q4 />;
      case 'DE11_CONES_P3_Q2':
        return <DiagramDe11ConesP3Q2 />;
      case 'DE11_BOAT_CURVE_P3_Q6':
        return <DiagramDe11BoatCurveP3Q6 />;
      case 'DE12_TABLE_P1_Q3':
        return <DiagramDe12TableP1Q3 />;
      case 'DE12_BBT_P1_Q7':
        return <DiagramDe12BBTP1Q7 />;
      case 'DE12_GRAPH_P1_Q10':
        return <DiagramDe12GraphP1Q10 />;
      case 'DE12_TETRAHEDRON_P1_Q12':
        return <DiagramDe12TetrahedronP1Q12 />;
      case 'DE12_TABLE_P2_Q2':
        return <DiagramDe12TableP2Q2 />;
      case 'DE12_PYRAMID_P2_Q4':
        return <DiagramDe12PyramidP2Q4 />;
      case 'DE12_CUBES_P3_Q3':
        return <DiagramDe12CubesP3Q3 />;
      case 'DE12_SQUARE_P3_Q4':
        return <DiagramDe12SquareP3Q4 />;
      case 'DE13_TABLE_P1_Q2':
        return <DiagramDe13TableP1Q2 />;
      case 'DE13_GRAPH_P1_Q3':
        return <DiagramDe13GraphP1Q3 />;
      case 'DE13_BBT_P1_Q11':
        return <DiagramDe13BBTP1Q11 />;
      case 'DE13_ROCKET_P2_Q1':
        return <DiagramDe13RocketP2Q1 />;
      case 'DE13_GRAPH_P2_Q2':
        return <DiagramDe13GraphP2Q2 />;
      case 'DE13_TABLE_P2_Q4':
        return <DiagramDe13TableP2Q4 />;
      case 'DE13_CURVE_P3_Q5':
        return <DiagramDe13CurveP3Q5 />;
      case 'DE13_HEXAGON_P3_Q6':
        return <DiagramDe13HexagonP3Q6 />;
      case 'DE14_GRAPH_P1_Q1':
        return <DiagramDe14GraphP1Q1 />;
      case 'DE14_BOX_P1_Q2':
        return <DiagramDe14BoxP1Q2 />;
      case 'DE14_TABLE_P1_Q3':
        return <DiagramDe14TableP1Q3 />;
      case 'DE14_GRAPH_P1_Q4':
        return <DiagramDe14GraphP1Q4 />;
      case 'DE14_TABLE_P1_Q7':
        return <DiagramDe14TableP1Q7 />;
      case 'DE14_TABLE_P2_Q1':
        return <DiagramDe14TableP2Q1 />;
      case 'DE14_BOX_P2_Q2':
        return <DiagramDe14BoxP2Q2 />;
      case 'DE14_GRAPH_P2_Q3':
        return <DiagramDe14GraphP2Q3 />;
      case 'DE14_SPHERES_P3_Q1':
        return <DiagramDe14SpheresP3Q1 />;
      case 'DE14_TETRAHEDRON_P3_Q2':
        return <DiagramDe14TetrahedronP3Q2 />;
      case 'DE14_BEADS_P3_Q4':
        return <DiagramDe14BeadsP3Q4 />;
      case 'DE14_CIRCLE_RULER_P3_Q6':
        return <DiagramDe14CircleRulerP3Q6 />;
      case 'DE15_TABLE_P1_Q4':
        return <DiagramDe15TableP1Q4 />;
      case 'DE15_BOX_P1_Q5':
        return <DiagramDe15BoxP1Q5 />;
      case 'DE15_BBT_P1_Q7':
        return <DiagramDe15BBTP1Q7 />;
      case 'DE15_PARALLELEPIPED_P1_Q10':
        return <DiagramDe15ParallelepipedP1Q10 />;
      case 'DE15_GRAPH_P1_Q11':
        return <DiagramDe15GraphP1Q11 />;
      case 'DE15_GRAPH_P2_Q1':
        return <DiagramDe15GraphP2Q1 />;
      case 'DE15_GRAPH_P2_Q2':
        return <DiagramDe15GraphP2Q2 />;
      case 'DE15_TABLE_P2_Q3':
        return <DiagramDe15TableP2Q3 />;
      case 'DE15_CONES_P3_Q1':
        return <DiagramDe15ConesP3Q1 />;
      case 'DE15_CARDS_P3_Q3':
        return <DiagramDe15CardsP3Q3 />;
      case 'DE15_CIRCLES_P3_Q4':
        return <DiagramDe15CirclesP3Q4 />;
      case 'DE15_CUBIC_CIRCLE_P3_Q5':
        return <DiagramDe15CubicCircleP3Q5 />;
      case 'DE15_MACHINE_P3_Q6':
        return <DiagramDe15MachineP3Q6 />;
      case 'PRISM':
      case 'HINH_LANG_TRU':
      case 'LANG_TRU':
        return <DiagramPrism />;
      case 'TRIANGLE_SECRET':
        return <DiagramTriangleSecret />;
      case 'OXYZ':
      case 'TOA_DO_OXYZ':
      case 'OXYZ_COORDINATES':
        return <DiagramCoordinateOxyz />;
      case 'GRAPH':
      case 'DO_THI':
      case 'FUNCTION_GRAPH':
        return <DiagramFunctionGraph />;
      case 'PYRAMID_SABCD':
      case 'CHOP_SABCD':
      case 'HINH_CHOP_SABCD':
        return <DiagramPyramidSABCD />;
      case 'PYRAMID_SABC':
      case 'CHOP_SABC':
      case 'HINH_CHOP_SABC':
        return <DiagramPyramidSABC />;
      case 'EXAM39_DERIVATIVE_GRAPH':
        return <DiagramExam39DerivativeGraph />;
      case 'EXAM39_CUBE_PYRAMID':
      case 'CUBE_PYRAMID':
        return <DiagramExam39CubePyramid />;
      case 'EXAM39_STAND_MODEL':
        return <DiagramExam39StandModel />;
      case 'EXAM39_SQUARE_QUARTER_CIRCLE':
        return <DiagramExam39SquareQuarterCircle />;
      case 'EXAM39_FRUSTUM_PYRAMID':
      case 'FRUSTUM':
        return <DiagramExam39FrustumPyramid />;
      case 'EXAM39_VARIATION_TABLE':
      case 'BANG_BIEN_THIEN':
      case 'VARIATION_TABLE':
        return <DiagramExam39VariationTable />;
      default:
        return null;
    }
  };

  const content = renderDiagramContent();
  if (!content) return null;

  return (
    <>
      <div className="w-full bg-[#f8fafc] p-2 sm:p-3 rounded-xl border border-slate-300 shadow relative flex flex-col items-center">
        {/* Top-right compact zoom controls for mobile & desktop */}
        <div className="w-full flex items-center justify-end gap-1 mb-1">
          <div className="inline-flex items-center gap-0.5 bg-slate-200/90 border border-slate-300 rounded-lg px-1 py-0.5 text-slate-700 shadow-xs">
            <button
              type="button"
              onClick={handleZoomOut}
              className="p-1 rounded hover:bg-slate-300 active:scale-95 transition cursor-pointer"
              title="Thu nhỏ hình vẽ"
              aria-label="Thu nhỏ hình vẽ"
            >
              <ZoomOut size={13} />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="px-1.5 text-[11px] font-mono font-bold text-slate-800 hover:bg-slate-300 rounded cursor-pointer"
              title="Đặt lại kích thước 100%"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              className="p-1 rounded hover:bg-slate-300 active:scale-95 transition cursor-pointer"
              title="Phóng to hình vẽ"
              aria-label="Phóng to hình vẽ"
            >
              <ZoomIn size={13} />
            </button>
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="p-1 rounded hover:bg-slate-300 active:scale-95 transition cursor-pointer ml-0.5 border-l border-slate-300 pl-1.5"
              title="Xem hình phóng to toàn màn hình"
              aria-label="Xem hình phóng to toàn màn hình"
            >
              <Maximize2 size={13} />
            </button>
          </div>
        </div>

        {/* Scrollable & pinch-zoomable diagram viewport */}
        <div className="w-full overflow-auto flex justify-center items-center py-1 touch-pan-x touch-pan-y">
          <div
            className="w-full flex justify-center items-center transition-transform duration-150 origin-top"
            style={{
              transform: scale !== 1 ? `scale(${scale})` : undefined,
              marginBottom: scale > 1 ? `${(scale - 1) * 140}px` : undefined,
            }}
          >
            {content}
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Modal for mobile inspection */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex flex-col items-center justify-between p-3 sm:p-6 animate-in fade-in"
          onClick={() => setIsFullscreen(false)}
        >
          <div
            className="w-full max-w-2xl flex items-center justify-between bg-[#0b1532] border border-[#1e345e] rounded-xl px-3.5 py-2.5 text-slate-100 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs sm:text-sm font-bold text-amber-300">
              🔍 Xem chi tiết hình vẽ (Hỗ trợ chạm 2 ngón để phóng to)
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleZoomOut}
                className="p-1.5 rounded-lg bg-[#142654] hover:bg-[#1e3a7a] text-slate-200 cursor-pointer"
                title="Thu nhỏ"
              >
                <ZoomOut size={16} />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                className="px-2 py-1 rounded-lg bg-[#142654] hover:bg-[#1e3a7a] text-amber-300 text-xs font-mono font-bold cursor-pointer flex items-center gap-1"
                title="100%"
              >
                <RotateCcw size={13} />
                <span>{Math.round(scale * 100)}%</span>
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                className="p-1.5 rounded-lg bg-[#142654] hover:bg-[#1e3a7a] text-slate-200 cursor-pointer"
                title="Phóng to"
              >
                <ZoomIn size={16} />
              </button>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white cursor-pointer ml-1"
                title="Đóng"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div
            className="w-full max-w-3xl flex-1 my-3 bg-[#f8fafc] rounded-2xl border-2 border-amber-400/70 shadow-2xl overflow-auto flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full flex justify-center items-center transition-transform duration-150 origin-center"
              style={{
                transform: `scale(${Math.max(1.15, scale)})`,
              }}
            >
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
